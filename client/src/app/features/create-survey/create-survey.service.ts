import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// todo DRY
const URL_API = '/api';       
const URL_SURVEYS = '/surveys';

@Injectable({
  providedIn: 'root'
})
export class CreateSurveyService {

  constructor(private httpClient: HttpClient) { }

  create(survey: any) {
    console.log(survey);
    this.httpClient.post(URL_API+URL_SURVEYS, survey)
      .subscribe( (data) => {
        console.log(data);
      });
  }
}
