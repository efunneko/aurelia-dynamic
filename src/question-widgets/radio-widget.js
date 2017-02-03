import {bindable} from 'aurelia-framework';

export class RadioWidget {
  options = [];
  name    = "";
  @bindable value   = "";
  activate(obj) {
    this.options = obj.options;
    this.name    = obj.name;
  }

  valueChanged(oldVal, newVal) {
    console.log(oldVal, newVal);
  }
}
