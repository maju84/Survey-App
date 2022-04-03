import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CreateSurveyValidator {
  public atLeastTwoAnswers(): ValidatorFn{
    return (control: AbstractControl) => { 
      const firstAnswerControl = control.get('answer-0');
      const secondAnswerControl = control.get('answer-1');

    

      if (firstAnswerControl && 
        firstAnswerControl?.value && secondAnswerControl?.value) {
        return null;
      }
                
      return { atLeastTwoAnswers : true }; 
    }
  }
}
