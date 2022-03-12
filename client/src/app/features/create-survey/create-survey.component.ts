import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CreateSurveyValidator } from './create-survey-validator.service';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss']
})
export class CreateSurveyComponent implements OnInit {
  answersCount = 5; 

  surveyForm = this.fb.group({    
    question: ['', Validators.required]
  }, {
    validators: [this.createSurveyValidator.atLeastTwoAnswers()]
  });


  constructor(private fb: FormBuilder, 
    private createSurveyValidator: CreateSurveyValidator
    ) {}

  ngOnInit(): void {
    for (let index = 0; index < this.answersCount; ++index) {
      this.surveyForm.setControl('answer-' +index, new FormControl() ); 
    }
  }

  addAnswer(): void {
    this.surveyForm.setControl('answer-' + this.answersCount, new FormControl() );
    this.answersCount++;
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
