import {inject, bindable} from 'aurelia-framework';
import {ScoreBoard} from '../models/scoreboard';

@inject(ScoreBoard, Element)
export class CheckboxWidget {
  question = {};
  @bindable value;

  constructor(scoreboard, element) {
    this.scoreboard = scoreboard;
    this.element    = element;
  }
  
  activate(obj) {
    this.question = obj;
    let answer = this.scoreboard.getAnswer(this.question.name);
    if (answer) {
      this.value = answer.value;
    }
  }

  valueChanged(newVal, oldVal) {

    this.scoreboard.answerQuestion({
      value:      newVal,
      name:       this.question.name,
      scoreData:  this.question.scoreData,
      scoreType:  this.question.scoreType
    });
    
  }  

  boxClick(checkbox) {
    this.value = this.value ? false : true;
  }
  
  attached() {
    let self = this;
    this.element.addEventListener('click', function(e) {
      self.boxClick();
    });
  }

  detached() {
    let self = this;
    this.element.removeEventListener('click', function(e) {
      self.boxClick();
    });
  }
  
};


