export class Question { 
  constructor() {
  } 

  static fromObject(src) { 
    return Object.assign(new Question(), src); 
  } 

  name    = "";
  value   = null;
  type    = null;
  text    = "";
  details = {};

} 

