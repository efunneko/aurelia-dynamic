export class NumberGrid {
  question = {};
  numbers = {};
  
  activate(obj) {
    this.question = obj;

    for (let row of obj.rows) {
      let num = {};
      for (let col of obj.columns) {
        let scale = 0;
        if (row.scale) {
          scale = row.scale;
        }
        if (col.scale) {
          scale *= col.scale;
        }

        let scoreData = [];
        for (let entry of obj.scoreData) {
          let newEntry = Object.assign({}, entry);
          newEntry.scale *= scale;
          scoreData.push(newEntry);
        }
    
        num[col.name] = {
          name:  `${obj.name}.${row.name}.${col.name}`,
          scoreType: obj.scoreType,
          scoreData: scoreData,
          value: 0
        };
      }
      this.numbers[row.name] = num;
    }

  }

};


