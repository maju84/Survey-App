import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CreateSurveyValidator } from './create-survey-validator';
import { CreateSurveyService } from './create-survey.service';

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


  constructor(
    private fb: FormBuilder, 
    private createSurveyValidator: CreateSurveyValidator,
    private createSurveyService: CreateSurveyService,
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
    console.log(this.surveyForm.value);
    // todo preprocess values 
    this.createSurveyService.create(this.surveyForm.value);
    alert('Thanks!');
  }
}
