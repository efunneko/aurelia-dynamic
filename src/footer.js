export class Footer {
  constructor() {
    this.message = "This is the footer";
    this.name = "";
    this.age  = "";
  }

  submit() {
    console.log("Got:", this.name, this.age);
    this.name = "It's me";
  }
}
