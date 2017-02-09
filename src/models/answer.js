export class Answer { 
  name    = "";
  value   = null;
  score   = null;

  static fromObject(src) { 
    let obj = Object.assign(new Answer(), src);
    obj.computeScore();
    return obj;
  } 

  // Compute the score using the value and scoring data
  computeScore() {
    if (!this.scoreType) {
      this.score = this.value ? this.scoreData : 0;
    }
    else if (this.scoreType == "scale") {
      let lastUpTo = 0;
      let score = 0;
      for (let entry of this.scoreData) {
        let numToAdd;
        if (this.value > entry.upTo) {
          score += (entry.upTo - lastUpTo) * entry.scale;
        }
        else {
          score += (this.value - lastUpTo) * entry.scale;
          break;
        }
        lastUpTo = entry.upTo;
        console.log(entry, score);
      }
      this.score = score;
    }
    
  }

} 
