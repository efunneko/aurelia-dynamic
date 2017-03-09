import {inject, computedFrom} from 'aurelia-framework';
import {ScoreBoard} from "../scoreboard";

@inject(ScoreBoard)
export class Achievements {
  constructor(scoreboard) {
    this.scoreboard = scoreboard;
  }

  @computedFrom('scoreboard.achievements')
  get achievements() {
    console.log("Achievements:", this.scoreboard.achievements, this.scoreboard.survey.achievements);
    if (!this.scoreboard.survey) {
      return [];
    }
    return this.scoreboard.survey.achievements;
  }

  @computedFrom('scoreboard.achievements')
  get achievementState() {
    return this.scoreboard.achievements;
  }

  @computedFrom('scoreboard.numAchievements')
  get numAchievements() {
    return this.scoreboard.notifications;
  }

    @computedFrom('scoreboard.achievementNotifications')
    get achievementNotifications() {
        console.log("Getting achievements");
        return this.scoreboard.achievementNotifications;
    }
    
}
