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

  decomposeAchievementRequirement(achievement, reqList, req) {

    let question = this.survey.questionIndex[req.name];

    if (!question) {
      console.log("Achievement requirement name error: ", req.name);
      return;
    }

    let matches = req.type.match(/^grid-column-(.*)/);
    if (matches) {
      let column = req.column || 0;
      let type = matches[1];
      
      for (let row of question.rows) {
        let name = `${question.name}.${row.name}.${question.columns[column].name}`;
        reqList.push({
          name: name,
          type: type,
          value: req.value
        });

        if (!this.survey.achievementIndex[name]) {
          this.survey.achievementIndex[name] = [];
        }
        this.survey.achievementIndex[name].push(achievement);
        
      }
      
    }
    
  }

  processSurvey() {

    // Make an efficient lookup to get to questions by name
    this.survey.questionIndex = {};
    for (let page of this.survey.pages) {
      this.processSurveyGroup(page.group);
    }
    
    // Make an efficient lookup table for achievements
    this.survey.achievementIndex = {};
    if (this.survey.achievements) {
      for (let achievement of this.survey.achievements) {
        let tempReq = achievement.requirements;
        achievement.requirements = [];
        for (let req of tempReq) {
          if (!this.survey.achievementIndex[req.name]) {
            this.survey.achievementIndex[req.name] = [];
          }

          // If this is a compound requirement type, decompose it
          if (req.type.match(/^grid/)) {
            this.decomposeAchievementRequirement(achievement, achievement.requirements, req);
          }
          else {
            achievement.requirements.push(req);
            this.survey.achievementIndex[req.name].push(achievement);
          }
        }
      }
    }
    
  }

  processSurveyGroup(group) {

    for (let item of group.items) {
      if (item.type === "group") {
        this.processSurveyGroup(item);
      }
      else {
        this.survey.questionIndex[item.name] = item;
      }
    }

  }
 
  getSurvey() {
    // Return a promise. It is possible that this would turn into
    // an async request eventually
    return new Promise(
      (resolve, reject) => {
        if (!this.survey) {
          this.survey = Survey.fromObject(surveyData);
          this.processSurvey();
        }
        resolve(this.survey); // success
      });
  }
 
} 
