import {inject} from 'aurelia-framework';
 
export class Question { 
  constructor() {
  }

  static fromObject(src) { 
    let obj = Object.assign(new Question(), src);
    obj.learnAnswer();
    return obj;
  } 

  learnAnswer() {
    //this.answer = this.scoreboard.getAnswer(this.name);
  }

  answerQuestion(answer) {
    this.answer = Answer.fromObject(answer);
    this.scoreboard(this.answer);
  }
  
} 

