import {inject} from 'aurelia-framework';
 
export class Achievement { 

  static fromObject(src) { 
    let obj = Object.assign(new Achievement(), src);
    return obj;
  } 


  
} 
