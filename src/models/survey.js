import {Page} from './page';

export class Survey { 
  constructor() {
  } 

  static fromObject(src) { 
    const survey = Object.assign(new Survey(), src);
    survey.pages = survey.pages.map(Page.fromObject); 

    survey.organizeQuestions();
    survey.organizeAchievements();

    return survey;
  } 


  // Go through the group and record the questions
  processGroup(group) {

    for (let item of group.items) {
      if (item.type === "group") {
        this.processGroup(item);
      }
      else {
        this.questionIndex[item.name] = item;
      }
    }

  }

  organizeQuestions() {
    for (let page of this.pages) {
      this.processGroup(page.group);
    }
  }

  organizeAchievements() {
    // Make an efficient lookup table for achievements
    if (this.achievements) {
      for (let achievement of this.achievements) {

        // Decompose compound achievements and create an index by question
        let tempReq = achievement.requirements;
        achievement.requirements = [];
        for (let req of tempReq) {
          if (!this.achievementIndex[req.name]) {
            this.achievementIndex[req.name] = [];
          }

          // If this is a compound requirement type, decompose it
          if (req.type.match(/^grid/)) {
            this.decomposeAchievementRequirement(achievement, achievement.requirements, req);
          }
          else {
            achievement.requirements.push(req);
            this.achievementIndex[req.name].push(achievement);
          }
        }

        // Organize the achievements by rarity
        if (!this.achievementByRarity[achievement.rarity]) {
          this.achievementByRarity[achievement.rarity] = [];
        }
        this.achievementByRarity[achievement.rarity].push(achievement);

      }
    }
  }


  // Turn compound requirements into individual
  decomposeAchievementRequirement(achievement, reqList, req) {

    let question = this.questionIndex[req.name];

    if (!question) {
      console.log("Achievement requirement name error: ", req.name);
      return;
    }

    let matches = req.type.match(/^grid-column-(.*)/);
    if (matches) {
      let column = req.column || 0;
      let type = matches[1];
      
      for (let row of question.rows) {
        let name = `${question.name}.${row.name}.${question.columns[column].name}`;
        reqList.push({
          name: name,
          type: type,
          value: req.value
        });

        if (!this.achievementIndex[name]) {
          this.achievementIndex[name] = [];
        }
        this.achievementIndex[name].push(achievement);
        
      }
    }
  }


  name = "";
  description = "";
  pages = [];
  questionIndex = [];
  achievementIndex = [];
  achievementByRarity = {};
  
} 

