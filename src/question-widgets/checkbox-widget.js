import {inject, bindable} from 'aurelia-framework';
import {ScoreBoard} from '../scoreboard';

@inject(ScoreBoard)
export class CheckboxWidget {
  question = {};
  @bindable value = false;

  constructor(scoreboard) {
    this.scoreboard = scoreboard;
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

};


