export class CheckboxGrid {
  question = {};
  checkboxes = {};
  
  activate(obj) {
    this.question = obj;

    for (let row of obj.rows) {
      let cb = {};
      for (let col of obj.columns) {
        cb[col.name] = {
          name: `${obj.name}.${row.name}.${col.name}`,
          value: false
        };
      }
      this.checkboxes[row.name] = cb;
    }
    console.log(this.checkboxes);
  }

};


