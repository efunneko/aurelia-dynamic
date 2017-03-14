import {inject, computedFrom} from 'aurelia-framework';
import {ScoreBoard} from "../models/scoreboard";

@inject(ScoreBoard)
export class Achievements {
  rarityLevels = ['common', 'rare', 'epic', 'legendary'];
  
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
  get achievementByRarity() {
    if (!this.scoreboard.survey) {
      return [];
    }
    console.log("Achievements by rarity:", this.scoreboard.survey.achievementByRarity);
    return this.scoreboard.survey.achievementByRarity;
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
