let ingredient = require("./ingredient.js");
let recipe = require("./recipe.js");

class makelist {
  constructor(){
    this.masterList = [];
  }
  loggedIn(){
    return true;
  }

  getCurrentUser(){
    return true;
  }

  createRecipe(){
    this.newRecipe = new recipe();

  }

  addRecipeToMasterList(newRecipe){
    let i = 0
    for(; i < this.masterList.length ; i++){
      if(this.masterList[i].getName() == newRecipe.getName()){
          return;
      }
    }
    if (i == this.masterList.length){
        this.masterList.push(newRecipe);
    }
  }

  getRecipeList(){
    return this.masterList;
  }

  findRecipe(searchCriteria){
    let i = 0;
    for(; i < this.masterList.length; i++){
      if(this.masterList[i].getName() == searchCriteria){
        return this.masterList[i];
      }
    }
  }

  showPage1(){
    document.querySelector('#page-1').style.display = "";
    document.querySelector('#page-2').style.display = "none";
    document.querySelector('#page-3').style.display = "none";
  }
  showPage2(){
    document.querySelector('#page-1').style.display = "none";
    document.querySelector('#page-2').style.display = "";
    document.querySelector('#page-3').style.display = "none";
  }
  showPage3(){
    document.querySelector('#page-1').style.display = "none";
    document.querySelector('#page-2').style.display = "none";
    document.querySelector('#page-3').style.display = "";
  }
};





module.exports = makelist;
