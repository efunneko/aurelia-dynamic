import {inject} from 'aurelia-framework'; 
import {HttpClient, json} from 'aurelia-fetch-client'; 
import {Survey} from './models/survey'; 
import environment from './environment'; 
import surveyData from './survey-data'; 
 
@inject(HttpClient) 
export class DataManager { 

  survey = null;
  
  constructor(httpClient) { 
    this.httpClient = httpClient.configure(config => { 
      config 
        .useStandardConfiguration() 
        .withBaseUrl(environment.contactsUrl); 
    }); 
  } 
 
  getSurvey() {
    // Return a promise. It is possible that this would turn into
    // an async request eventually
    return new Promise(
      (resolve, reject) => {
        if (!this.survey) {
          this.survey = Survey.fromObject(surveyData);
        }
        resolve(this.survey); // success
      });
  }
 
} 
