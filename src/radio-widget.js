export class RadioWidget {
  options = [];
  name    = "";
  value   = "";
  activate(obj) {
    this.options = obj.options;
    this.name    = obj.name;
  }
}
