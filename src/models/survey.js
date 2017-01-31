import {Page} from './page';

export class Survey { 
  constructor() {
  } 

  static fromObject(src) { 
    const survey = Object.assign(new Survey(), src);
    survey.pages = survey.pages.map(Page.fromObject); 
    return survey;
  } 

  name = "";
  description = "";
  pages = [];
  
} 

