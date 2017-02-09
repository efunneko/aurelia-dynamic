import {Answer} from "./models/answer";
import {inject} from 'aurelia-framework';
export class ScoreBoard {
  answers = {};
  notifications = [];
  totalScore = 0;

  constructor() {
    console.log("New scoreboard");
  }
  
  answerQuestion(answer) {
    let ansObj    = Answer.fromObject(answer);
    let lastTotal = this.totalScore;

    // Remove the previous answer from the total score
    if (this.answers[ansObj.name] &&
        this.answers[ansObj.name].score) {
      this.totalScore -= this.answers[ansObj.name].score;
    }

    // Add this answer to the total score
    this.totalScore += ansObj.score;
    this.answers[ansObj.name] = ansObj;

    // If the score has changed, notify the user
    let lastDelta = this.totalScore - lastTotal;
    if (lastDelta != 0) {
      this.addScoreChangeNotification(lastDelta);
    }
    
  }

  getAnswer(questionName) {
    return this.answers[questionName];
  }

  addScoreChangeNotification(amount) {
    let notification = amount < 0 ? amount.toString() : "+" + amount.toString();
    this.notifications.push(notification);
    setTimeout(() => { 
      this.notifications.splice(0, 1);
    }, 2500);
    console.log(this.notifications);
  }
  
  
}
