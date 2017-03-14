import {Question} from './question';

export class Group { 

  static fromObject(src) { 
    const group = Object.assign(new Group(), src);
    let tmpItems = group.items;
    console.log(tmpItems);
    group.items = [];
    console.log("temp items:", tmpItems);
    for (let item of tmpItems) {
      // We can have groups in groups
      if (item.type === "group") {
        group.items.push(Group.fromObject(item));
      }
      else {
        console.log("Adding quest", item);
        group.items.push(Question.fromObject(item));
      }
    }
    return group;
  } 

  name   = "";
  border = false;
  items  = [];
  
} 

