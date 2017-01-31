import {inject} from 'aurelia-framework'; 
import {Page} from './models/page';

export class Home {

  page = null;
  
  constructor() {
  }

  activate(page) {
    console.log("Page:", page);
    this.page = page;
  }
  
};
