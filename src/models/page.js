import {Group} from './group';

export class Page { 
  constructor() {
  } 

  static fromObject(src) { 
    const page = Object.assign(new Page(), src);
    page.group = Group.fromObject(page.group);
    return page;
  } 

  name = "";
  description = "";
  group = {};
  
} 

