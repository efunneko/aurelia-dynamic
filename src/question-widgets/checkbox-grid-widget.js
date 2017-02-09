export class CheckboxGrid {
  question = {};
  checkboxes = {};
  
  activate(obj) {
    this.question = obj;

    for (let row of obj.rows) {
      let cb = {};
      for (let col of obj.columns) {
        let scoreData = 0;
        if (row.scoreData) {
          scoreData = row.scoreData;
        }
        if (col.scoreData) {
          scoreData *= col.scoreData;
        }
        cb[col.name] = {
          name:      `${obj.name}.${row.name}.${col.name}`,
          scoreData: scoreData,
          value:     false
        };
      }
      this.checkboxes[row.name] = cb;
    }

  }

};


