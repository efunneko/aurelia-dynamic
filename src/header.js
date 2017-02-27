import {inject, computedFrom} from 'aurelia-framework';
import { ScoreBoard } from "./scoreboard";

@inject(ScoreBoard)
export class Header {
  constructor(scoreboard) {
    this.scoreboard = scoreboard;
    this.message = "This is the header";
  }

  @computedFrom('scoreboard.totalScore')
  get score() {
    return this.scoreboard.totalScore;
  }

  @computedFrom('scoreboard.notifications')
  get scoreNotifications() {
    return this.scoreboard.notifications;
  }

    @computedFrom('scoreboard.achievementNotifications')
    get achievementNotifications() {
        console.log("Getting achievements");
        return this.scoreboard.achievementNotifications;
    }
    
}
