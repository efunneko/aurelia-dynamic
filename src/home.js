import {inject} from 'aurelia-framework'; 
import {DataManager} from './data-manager'; 
import {Router} from 'aurelia-router'; 

@inject(DataManager, Router) 
export class Home {

  pageIdx = 0;
  survey = null;
  
  constructor(dataManager, router) {
    this.dataManager = dataManager;
    this.router      = router;
  }

  activate(params) {
    if (params.pageNum && params.pageNum > 1) {
      this.pageIdx = params.pageNum - 1;
    }
    else {
      this.pageIdx = 0;
    }

    return this.dataManager.getSurvey() 
      .then(survey => {
        this.survey = survey;
        console.log("Survey:", survey);
      });    
  }

  getNext() {
    
  }

  getPrev() {

  }
  
};
