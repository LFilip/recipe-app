class recipe {

  constructor(){
    this.name = "Name";
    this.ingredients = [];
    this.steps = [];
    this.cooktime = 0;
    this.preptime = 0;
  }

  getName(){
    return this.name;
  }

  setName(newName){
    this.name = newName;
  }

  addIngredient(newIngredient){
    this.ingredients.push(newIngredient);
  }

  getIngredients(){
    return this.ingredients;
  }

  addStep(newStep){
    this.steps.push(newStep);
  }

  getSteps(){
    return this.steps;
  }

  setCooktime(newTime){
    this.cooktime = newTime;
  }

  getCooktime(){
    return this.cooktime;
  }

  setPreptime(newTime){
    this.preptime = newTime;
  }

  getPreptime(){
    return this.preptime;
  }

  getTotaltime(){
    return this.preptime + this.cooktime;
  }

};

module.exports = recipe;
