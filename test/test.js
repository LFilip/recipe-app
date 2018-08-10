let makelist = require('../src/app.js');
let assert = require('assert');
let recipe = require('../src/recipe.js');
let ingredient = require('../src/ingredient.js');
let kitchenConverter = require('../src/kitchenConverter.js');



describe('Ingredient', function(){
  let ingredientInstance = new ingredient();
  it('should return Name if created without a name', function(){
    assert.equal(ingredientInstance.getName(), "Name");
  });
  it('should return Tomato if the name is changed to Tomato', function(){
    ingredientInstance.setName("Tomato");
    assert.equal(ingredientInstance.getName(), "Tomato");
  });
  it('should have 0 NumberOfItem if created empty', function(){
    assert.equal(ingredientInstance.getNumberOfItem(), 0);
  });
  it('should have 5 NumberOfItem after setting it to 5', function(){
    ingredientInstance.setNumberOfItem(5);
    assert.equal(ingredientInstance.getNumberOfItem(), 5);
  });
  it('should remain unchanged if the entered input is "B"', function(){
    ingredientInstance.setNumberOfItem("B");
    assert.equal(ingredientInstance.getNumberOfItem(), 5);
  });
  it('should display Ounces if created without a name', function(){
    assert.equal(ingredientInstance.getUnitOfMeasure(), "Ounce");
  });
  it('should display Cups if changed to cups', function(){
    ingredientInstance.setUnitOfMeasure("Cup");
    assert.equal(ingredientInstance.getUnitOfMeasure(), "Cup");
  });
  it('should display Cups if tried to change to "Incorrect"', function(){
    ingredientInstance.setUnitOfMeasure("Incorrect");
    assert.equal(ingredientInstance.getUnitOfMeasure(), "Cup");
  })
  it('should display Pint if changed using pt', function(){
    ingredientInstance.setUnitOfMeasure("pt");
    assert.equal(ingredientInstance.getUnitOfMeasure(), "Pint");
  });
  it('should be able to create a new instance with name', function(){
    ingredientInstance.updateNameNumberMeasure("Potato", 4, "Cup");
    assert.equal(ingredientInstance.getName(), "Potato");
    assert.equal(ingredientInstance.getNumberOfItem(), 4);
    assert.equal(ingredientInstance.getUnitOfMeasure(), "Cup");
  });
  it('can take input for a constructor', function(){
    let newIngredient = new ingredient("Potato", 4, "Cup");
    assert.equal(newIngredient.getName(), "Potato");
    assert.equal(newIngredient.getNumberOfItem(), 4);
    assert.equal(newIngredient.getUnitOfMeasure(), "Cup");
  });
  it('should return 8 quarts if given 2 gallons', function(){
    ingredientInstance.setNumberOfItem(2);
    ingredientInstance.setUnitOfMeasure("Gallon");
    assert.equal(ingredientInstance.getUnitOfMeasure(), "Gallon");
    assert.equal(ingredientInstance.getNumberOfItem(), 2);
    ingredientInstance.changeUnitTo("quart");
    assert.equal(ingredientInstance.getUnitOfMeasure(), "Quart");
    assert.equal(ingredientInstance.getNumberOfItem(), 8);
  });
  it('should return 2 gallons if given 8 quarts', function(){
    ingredientInstance.changeUnitTo("gallon");
    assert.equal(ingredientInstance.getUnitOfMeasure(), "Gallon");
    assert.equal(ingredientInstance.getNumberOfItem(), 2);
  });
  it('should return 3000 ml for 3 l', function(){
    ingredientInstance.setNumberAndUnit(3, "l");
    ingredientInstance.changeUnitTo("Milliliter");
    assert.equal(ingredientInstance.getNumberOfItem(), 3000);
    assert.equal(ingredientInstance.getUnitOfMeasure(), "Milliliter");
  });
  it('should return 6.34 pints for 3000 milliliters', function(){
    ingredientInstance.changeUnitTo("pint");
    assert.equal(ingredientInstance.getUnitOfMeasure(), "Pint");
    assert.equal(ingredientInstance.getNumberOfItem(), 6.34);
  });


});

    let KitchenConverter = new kitchenConverter();
describe("KitchenConverter", function(){
  it('should return 8 if given 2 gallons to convert to quarts', function(){
    assert.equal(KitchenConverter.toQuart(2, "gallon"), 8);
  });
  it('should return 453.60 grams for 1 pound', function(){
    assert.equal(KitchenConverter.toGram(1, "pound"), 453.60);
  });
  it('should return 1/453.6 pounds for 1 gram', function(){
    assert.equal(KitchenConverter.toPound(1, "gram"), 1/453.60 )
  })
});

describe('recipe', function(){
  let recipeInstance = new recipe();
  it('should return Name if created without a name', function(){
    assert.equal(recipeInstance.getName() , "Name");
  });
  it('should return Bob if the name is changed to Bob', function(){
    recipeInstance.setName("Bob");
    assert.equal(recipeInstance.getName(), "Bob");
  });
  it('should return an ingredient when asked for an ingredient at position 1', function(){
    let newIngredient = new ingredient("Potato", 3, "oz");
    recipeInstance.addIngredient(newIngredient);
    assert.equal(typeof newIngredient, "object");
    assert.equal(recipeInstance.getIngredients()[0], newIngredient);
    let newIngredient2 = new ingredient("Pureed Tomato", 5, "l");
    recipeInstance.addIngredient(newIngredient2);
    assert.equal(recipeInstance.getIngredients()[1], newIngredient2);
  });
  it('should return a list of steps if requested', function(){
    let newStep = "Well here is a step";
    recipeInstance.addStep(newStep);
    assert.equal(recipeInstance.getSteps()[0], newStep);
  });
  it('should return 23 cooktime if set at 23', function(){
    let newTime = 23;
    recipeInstance.setCooktime(newTime);
    assert.equal(recipeInstance.getCooktime(), 23);
  });
  it('should return 42 preptime if set at 42', function(){
    let newTime = 42;
    recipeInstance.setPreptime(newTime);
    assert.equal(recipeInstance.getPreptime(), 42);
  });
  it('should return 20 totaltime if prep set at 12 and cook at 8', function(){
    let newTime = 12;
    recipeInstance.setPreptime(12);
    recipeInstance.setCooktime(8);
    assert.equal(recipeInstance.getTotaltime(), 20);
  })
})

describe('makelist', function() {
  let makeList = new makelist();
  it('should display login', function(){
    assert.equal(makeList.loggedIn(), true);
  });
  it('should load firebase', function(){
    assert.equal(typeof makeList.getCurrentUser(), 'boolean');
  });
  it('should create a recipe if given the recipe', function(){
    let newIngredient = new ingredient("Tomato", 3, "oz");
    let newIngredient2 = new ingredient("Potato", 5, "cup");
    let newRecipe = new recipe();
    newRecipe.setName("Tomato Potato");
    newRecipe.setCooktime(14);
    newRecipe.setPreptime(15);
    newRecipe.addIngredient(newIngredient);
    newRecipe.addIngredient(newIngredient2);
    newRecipe.addStep("Add Potato");
    newRecipe.addStep("Add Tomato");
    makeList.addRecipeToMasterList(newRecipe);
    assert.equal(makeList.getRecipeList()[0], newRecipe);
  })
  it('should not have 2 of the item if another one is added with the same name', function(){
    let newIngredient = new ingredient("Tomato", 3, "oz");
    let newIngredient2 = new ingredient("Potato", 5, "cup");
    let newRecipe = new recipe();
    newRecipe.setName("Tomato Potatos");
    newRecipe.setCooktime(14);
    newRecipe.setPreptime(15);
    newRecipe.addIngredient(newIngredient);
    newRecipe.addIngredient(newIngredient2);
    newRecipe.addStep("Add Potato");
    newRecipe.addStep("Add Tomato");
    makeList.addRecipeToMasterList(newRecipe);
    assert.equal(makeList.getRecipeList()[1], newRecipe);
  })
  it('should return a recipe with the name Tomato Potato', function(){
    assert.equal(makeList.findRecipe("Tomato Potato").getName(), "Tomato Potato");
  });
  it('');
});
