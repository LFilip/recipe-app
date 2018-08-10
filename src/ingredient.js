let kitchenConverter = require('./kitchenConverter');

class ingredient {

  constructor(newName, newNumber, newUnit){
    this.MEASURES = {
      GALLON: "Gallon",
      QUART: "Quart",
      PINT: "Pint",
      CUP: "Cup",
      OUNCE: "Ounce",
      POUND: "Pound",
      LITER:  "Liter",
      MILLILITER: "Milliliter",
      GRAM: "Gram",
      MILLIGRAM: "Milligram",
      TABLESPOON: "Tablespoon",
      TEASPOON: "Teaspoon",
    }
    if(typeof newName != 'undefined'){
      this.name = newName;
    } else {
      this.name = "Name";
    }

    if(typeof newNumber != 'undefined'){
      this.number = newNumber;
    } else {
      this.number = 0;
    }

    if(typeof newUnit != 'undefined'){
      let testUnit = newUnit.toLowerCase();
      if(testUnit == "cup" || testUnit == "cups" || testUnit == "c"){
        this.unitOfMeasure = this.MEASURES.CUP;
      } else if (testUnit == "ounce" || testUnit == "oz"){
        this.unitOfMeasure = this.MEASURES.OUNCE;
      } else if (testUnit == "gallon"){
        this.unitOfMeasure = this.MEASURES.GALLON;
      } else if (testUnit == "pt" || testUnit == "pint"){
        this.unitOfMeasure = this.MEASURES.PINT;
      } else if (testUnit == "g" || testUnit == "gram"){
        this.unitOfMeasure = this.MEASURES.GRAM;
      } else if (testUnit == "qt" || testUnit == "quart"){
        this.unitOfMeasure = this.MEASURES.QUART;
      } else if (testUnit == "lb" || testUnit == "pound"){
        this.unitOfMeasure = this.MEASURES.POUND;
      } else if (testUnit == "liter" || testUnit == "l"){
        this.unitOfMeasure = this.MEASURES.LITER;
      } else if (testUnit == "ml" || testUnit == "milliliter"){
        this.unitOfMeasure = this.MEASURES.MILLILITER;
      } else if (testUnit == "tbsp" || testUnit == "tablespoon"){
        this.unitOfMeasure = this.MEASURES.TABLESPOON;
      } else if (testUnit == "tsp" || testUnit == "teaspoon"){
        this.unitOfMeasure = this.MEASURES.TEASPOON;
      } else {
        this.unitOfMeasure = this.MEASURES.MILLIGRAM;
      }
    } else {
      this.unitOfMeasure = this.MEASURES.OUNCE;
    }
  }

  getName(){
    return this.name;
  }

  setName(newName){
    this.name = newName;
  }

  setNumberOfItem(newNumber){
    if(!isNaN(newNumber)){
      this.number = newNumber;
    }
  }

  getNumberOfItem(){
    let temp = Number.parseFloat(this.number).toPrecision(3);
    return temp;
  }

  getUnitOfMeasure(){
    return this.unitOfMeasure;
  }

  setUnitOfMeasure(newUnit){
    let testUnit = newUnit.toLowerCase();
    if(testUnit == "cup" || testUnit == "cups" || testUnit == "c"){
      this.unitOfMeasure = this.MEASURES.CUP;
    } else if (testUnit == "ounce" || testUnit == "oz"){
      this.unitOfMeasure = this.MEASURES.OUNCE;
    } else if (testUnit == "gallon"){
      this.unitOfMeasure = this.MEASURES.GALLON;
    } else if (testUnit == "pt" || testUnit == "pint"){
      this.unitOfMeasure = this.MEASURES.PINT;
    } else if (testUnit == "g" || testUnit == "gram"){
      this.unitOfMeasure = this.MEASURES.GRAM;
    } else if (testUnit == "qt" || testUnit == "quart"){
      this.unitOfMeasure = this.MEASURES.QUART;
    } else if (testUnit == "lb" || testUnit == "pound"){
      this.unitOfMeasure = this.MEASURES.POUND;
    } else if (testUnit == "liter" || testUnit == "l"){
      this.unitOfMeasure = this.MEASURES.LITER;
    } else if (testUnit == "ml" || testUnit == "milliliter"){
      this.unitOfMeasure = this.MEASURES.MILLILITER;
    } else if (testUnit == "tbsp" || testUnit == "tablespoon"){
      this.unitOfMeasure = this.MEASURES.TABLESPOON;
    } else if (testUnit == "tsp" || testUnit == "teaspoon"){
      this.unitOfMeasure = this.MEASURES.TEASPOON;
    } else {
    }
  }

  updateNameNumberMeasure(newName, newNumber, newUnit){
      this.setName(newName);
      this.setNumberOfItem(newNumber);
      this.setUnitOfMeasure(newUnit);
  }


// takes an input of which unit to change to and changes the unit of measure and NumberOfItem
  changeUnitTo(newUnit){
    let testUnit = newUnit.toLowerCase();
    let KitchenConverter = new kitchenConverter();

    if(testUnit == "cup" || testUnit == "cups" || testUnit == "c"){
      let temp = KitchenConverter.toCup(this.number, this.unitOfMeasure);
      this.setNumberAndUnit(temp, this.MEASURES.CUP);
    }
    else if (testUnit == "ounce" || testUnit == "oz"){
      let temp = KitchenConverter.toOunce(this.number, this.unitOfMeasure);
      this.setNumberAndUnit(temp, this.MEASURES.OUNCE);
    }
    else if (testUnit == "gallon"){
      let temp = KitchenConverter.toGallon(this.number, this.unitOfMeasure);
      this.setNumberAndUnit(temp, this.MEASURES.GALLON);
    }
    else if (testUnit == "pt" || testUnit == "pint"){
      let temp = KitchenConverter.toPint(this.number, this.unitOfMeasure);
      this.setNumberAndUnit(temp, this.MEASURES.PINT);
    }
    else if (testUnit == "qt" || testUnit == "quart"){
      let temp = KitchenConverter.toQuart(this.number, this.unitOfMeasure);
      this.setNumberAndUnit(temp, this.MEASURES.QUART);
    }
    else if (testUnit == "liter" || testUnit == "l"){
      let temp = KitchenConverter.toLiter(this.number, this.unitOfMeasure);
      this.setNumberAndUnit(temp, this.MEASURES.LITER);
    }
    else if (testUnit == "ml" || testUnit == "milliliter"){
      let temp = KitchenConverter.toMilliliter(this.number, this.unitOfMeasure);
      this.setNumberAndUnit(temp, this.MEASURES.MILLILITER);
    }
    else if (testUnit == "tbsp" || testUnit == "tablespoon"){
      let temp = KitchenConverter.toTablespoon(this.number, this.unitOfMeasure);
      this.setNumberAndUnit(temp, this.MEASURES.TABLESPOON);
    }
    else if (testUnit == "tsp" || testUnit == "teaspoon"){
      let temp = KitchenConverter.toTeaspoon(this.number, this.unitOfMeasure);
      this.setNumberAndUnit(temp, this.MEASURES.TEASPOON);
    }
    else if (testUnit == "g" || testUnit == "gram"){
      this.unitOfMeasure = this.MEASURES.GRAM;
    }
    else if (testUnit == "lb" || testUnit == "pound"){
      this.unitOfMeasure = this.MEASURES.POUND;
    }
  }

  setNumberAndUnit(newNumber, newUnit){
    if(newNumber > 0) { // checks to see if it is a -1 and if it is valid changes it
      this.setNumberOfItem(newNumber);
      this.setUnitOfMeasure(newUnit);
    } else {
      throw new Error
    }
  }
};

module.exports = ingredient;
