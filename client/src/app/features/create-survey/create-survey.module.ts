import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateSurveyRoutingModule } from './create-survey-routing.module';
import { CreateSurveyComponent } from './create-survey.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreateSurveyComponent],
  imports: [
    CommonModule,
    CreateSurveyRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CreateSurveyModule { }
