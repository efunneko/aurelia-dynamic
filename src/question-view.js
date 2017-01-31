export class QuestionView {

  question = null;
  
  activate(question) {
    console.log(question);
    this.question = question;
  }
  
};
