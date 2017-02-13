import {inject, bindable} from 'aurelia-framework';
import {ScoreBoard} from '../scoreboard';

@inject(ScoreBoard, Element)
export class RadioWidget {
  question = {};
  @bindable value = -1;

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
    let selected = this.question.options[newVal];
    this.scoreboard.answerQuestion({
      name:      this.question.name,
      value:     newVal,
      scoreType: selected.scoreType,
      scoreData: selected.scoreData
    });
  }

  radioClick(radioButton, index) {
    this.value = index;
  }

  attached() {
    let elements = this.element.getElementsByClassName("radio-button");
    for(let i = 0; i < elements.length; i++) {
      let el = elements[i];
      let self = this;
      console.log("Adding handler for ", i, el);
      el.addEventListener('click', function(e) {
        self.radioClick(el, i);
      });
    }
  }

  detached() {
    let elements = this.element.getElementsByClassName("radio-button");
    for(let i = 0; i < elements.length; i++) {
      let el = elements[i];
      let self = this;
      el.removeEventListener('click', function(e) {
        self.radioClick(el, i);
      });
    }
  }

}
