import {inject, bindable} from 'aurelia-framework';
import {ScoreBoard} from '../scoreboard';

@inject(ScoreBoard)
export class RadioWidget {
  question = {};
  @bindable value = "";

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
    let selected = this.question.options[newVal];
    this.scoreboard.answerQuestion({
      name:      this.question.name,
      value:     newVal,
      scoreType: selected.scoreType,
      scoreData: selected.scoreData
    });
  }
}
