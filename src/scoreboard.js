import {Answer} from "./models/answer";
import {inject} from 'aurelia-framework';
import {DataManager} from './data-manager'; 

@inject(DataManager)
export class ScoreBoard {
  answers = {};
  achievements = {};
  notifications = [];
  achievementNotifications = [];
  totalScore = 0;
  numAchievements = 0;

  constructor(dataManager) {
    this.dataManager = dataManager;
    this.dataManager.getSurvey()
      .then(survey => {
        this.survey = survey;
      });    
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

    this.checkAchievements(ansObj);
    
  }

  getAnswer(questionName) {
    return this.answers[questionName];
  }

  checkAchievements(answer) {

    if (!this.survey) {
      return;
    }
    
    if (this.survey.achievementIndex[answer.name]) {

      // This question feeds into at least one achievement
      for (let achievement of this.survey.achievementIndex[answer.name]) {
        let allReqsMet = true;
        for (let requirement of achievement.requirements) {
          if (answer.name === requirement.name) {
            requirement.met = this.doesPassAchievementRequirement(answer, requirement);
          }
          if (!requirement.met) {
            allReqsMet = false;
          }
        }

        let scoreDelta = 0;
        if (!this.achievements[achievement.name] && allReqsMet) {
          // New achievement met
          console.log("Got achievement: ", achievement.name);
          scoreDelta = achievement.score;
          this.addAchievementChangeNotification(achievement);
          this.numAchievements++;
        }
        else if (this.achievements[achievement.name] && !allReqsMet) {
          // Existing achievement lost
          console.log("Lost achievement: ", achievement.name);
          scoreDelta = -achievement.score;
          this.numAchievements--;
        }
        this.achievements[achievement.name] = allReqsMet;

        if (scoreDelta) {
          this.totalScore += scoreDelta;
          this.addScoreChangeNotification(scoreDelta);
        }
        
      }
      
    }
    
  }

  doesPassAchievementRequirement(answer, requirement) {
    if (requirement.type === "greater-than"){
      if (answer.score > requirement.value) {
        return true;
      }
      return false;
    }
    else if (requirement.type === "less-than"){
      if (answer.score < requirement.value) {
        return true;
      }
      return false;
    }
    else if (requirement.type === "equal"){
      if (answer.score === requirement.value) {
        return true;
      }
      return false;
    }
    return false;
  }

  addScoreChangeNotification(amount) {
    let notification = amount < 0 ? amount.toString() : "+" + amount.toString();
    this.notifications.push(notification);
    setTimeout(() => { 
      this.notifications.splice(0, 1);
    }, 102500);
    console.log(this.notifications);
  }
  
  addAchievementChangeNotification(achievement) {
    let notification = `New achievement: ${achievement.name}`;
    this.achievementNotifications.push(notification);
    setTimeout(() => { 
      this.achievementNotifications.splice(0, 1);
    }, 2500);
    console.log(this.notifications);
  }
  
  
}
