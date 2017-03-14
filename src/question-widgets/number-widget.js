import {inject, bindable} from 'aurelia-framework';
import {ScoreBoard} from '../models/scoreboard';

function isNavigationOrSelectionKey(e) {
  if ([46, 8, 9, 27, 110, 190].indexOf(e.keyCode) !== -1 ||
    ([65, 67, 86, 88].indexOf(e.keyCode) !== -1 && (e.ctrlKey === true || e.metaKey === true)) ||
    (e.keyCode >= 35 && e.keyCode <= 40)) {
     return true;
  }
  return false;
}

function keydown (e) {
  if (isNavigationOrSelectionKey(e)) {
    return;
  }
  if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
    e.preventDefault();
  }
}


@inject(ScoreBoard, Element)
export class SelectWidget {
  question = {};
  @bindable value = 0;

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
      name:      this.question.name,
      value:     newVal,
      scoreType: this.question.scoreType,
      scoreData: this.question.scoreData
    });
  }

  attached() {
    this.element.addEventListener('keydown', keydown);
  }

  detached() {
    this.element.removeEventListener('keydown', keydown);
  }

  addOne() {
    this.value++;
  }

  subtractOne() {
    if (this.value > 0 || this.question.allowNegative) {
      this.value--;
    }
  }

}
