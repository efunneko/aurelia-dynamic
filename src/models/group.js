import {Question} from './question';

export class Group { 
  constructor() {
  } 

  static fromObject(src) { 
    const group = Object.assign(new Group(), src);
    let tmpItems = group.items;
    console.log(tmpItems);
    group.items = [];
    console.log(tmpItems);
    for (let item of tmpItems) {
      // We can have groups in groups
      if (item.type === "group") {
        group.items.push(Group.fromObject(item));
      }
      else {
        group.items.push(Question.fromObject(item));
      }
    }
    return group;
  } 

  name   = "";
  border = false;
  items  = [];
  
} 

