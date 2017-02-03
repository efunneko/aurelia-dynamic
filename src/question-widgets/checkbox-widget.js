import {bindable} from 'aurelia-framework'; 

export class CheckboxWidget {
  question = {};
  @bindable value = false;
  
  activate(obj) {
    this.question = obj;
  }

  valueChanged(newVal, oldVal) {
    console.log("Changed", this.question.name, oldVal, newVal);
  }

};


