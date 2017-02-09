import {inject, bindable} from 'aurelia-framework';
import {ScoreBoard} from '../scoreboard';

@inject(ScoreBoard)
export class SelectWidget {
  score = 0;

  constructor(scoreboard) {
    this.scoreboard = scoreboard;
  }
  
  activate(obj) {
  }

  set score(val) {
    this.score = val;
  }
  
}
