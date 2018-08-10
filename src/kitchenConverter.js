class kitchenConverter {

  constructor(){
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
  }


      toCup(currentNumber, oldUnit){
          let testUnit = oldUnit.toLowerCase();
          if(testUnit == "cup" || testUnit == "cups" || testUnit == "c"){
            return currentNumber;
          } else if (testUnit == "ounce" || testUnit == "oz"){
            return currentNumber / 8;
          } else if (testUnit == "gallon"){
            return currentNumber / .0625;
          } else if (testUnit == "pt" || testUnit == "pint"){
            return currentNumber / .5;
          } else if (testUnit == "g" || testUnit == "gram"){
            return -1;
          } else if (testUnit == "qt" || testUnit == "quart"){
            return currentNumber / .25;
          } else if (testUnit == "lb" || testUnit == "pound"){
            return -1;
          } else if (testUnit == "liter" || testUnit == "l"){
            return currentNumber / .2366;
          } else if (testUnit == "ml" || testUnit == "milliliter"){
            return currentNumber / 2366;
          } else if (testUnit == "tbsp" || testUnit == "tablespoon"){
            return currentNumber / 16;
          } else if (testUnit == "tsp" || testUnit == "teaspoon"){
            return currentNumber / 48;
          } else {
            return -1;
          }
        }

  toQuart(currentNumber, oldUnit){
      let testUnit = oldUnit.toLowerCase();
      if(testUnit == "cup" || testUnit == "cups" || testUnit == "c"){
        return currentNumber / 4;
      } else if (testUnit == "ounce" || testUnit == "oz"){
        return currentNumber / 32;
      } else if (testUnit == "gallon"){
        return currentNumber / .25;
      } else if (testUnit == "pt" || testUnit == "pint"){
        return currentNumber / 1.719;
      } else if (testUnit == "g" || testUnit == "gram"){
        return -1;
      } else if (testUnit == "qt" || testUnit == "quart"){
        return currentNumber / .0859;
      } else if (testUnit == "lb" || testUnit == "pound"){
        return -1;
      } else if (testUnit == "liter" || testUnit == "l"){
        return currentNumber / .9464;
      } else if (testUnit == "ml" || testUnit == "milliliter"){
        return currentNumber / 945.4;
      } else if (testUnit == "tbsp" || testUnit == "tablespoon"){
        return currentNumber / 64;
      } else if (testUnit == "tsp" || testUnit == "teaspoon"){
        return currentNumber / 192;
      } else {
        return -1;
      }
    }


    toPint(currentNumber, oldUnit){
        let testUnit = oldUnit.toLowerCase();
        if(testUnit == "cup" || testUnit == "cups" || testUnit == "c"){
          return currentNumber / 2;
        } else if (testUnit == "ounce" || testUnit == "oz"){
          return currentNumber / 16;
        } else if (testUnit == "gallon"){
          return currentNumber / .125;
        } else if (testUnit == "pt" || testUnit == "pint"){
          return currentNumber;
        } else if (testUnit == "g" || testUnit == "gram"){
          return -1;
        } else if (testUnit == "qt" || testUnit == "quart"){
          return currentNumber / .5;
        } else if (testUnit == "lb" || testUnit == "pound"){
          return -1;
        } else if (testUnit == "liter" || testUnit == "l"){
          return currentNumber / .4732;
        } else if (testUnit == "ml" || testUnit == "milliliter"){
          return currentNumber / 473.2;
        } else if (testUnit == "tbsp" || testUnit == "tablespoon"){
          return currentNumber / 32;
        } else if (testUnit == "tsp" || testUnit == "teaspoon"){
          return currentNumber / 96;
        } else {
          return -1;
        }
      }


  toGallon(currentNumber, newUnit){
      let testUnit = newUnit.toLowerCase();
      if(testUnit == "cup" || testUnit == "cups" || testUnit == "c"){
        return (currentNumber / 16);
      } else if (testUnit == "ounce" || testUnit == "oz"){
        return currentNumber / 128;
      } else if (testUnit == "gallon"){
        return currentNumber;
      } else if (testUnit == "pt" || testUnit == "pint"){
        return currentNumber / 8;
      } else if (testUnit == "g" || testUnit == "gram"){
        return -1;
      } else if (testUnit == "qt" || testUnit == "quart"){
        return currentNumber / 4;
      } else if (testUnit == "lb" || testUnit == "pound"){
        return -1;
      } else if (testUnit == "liter" || testUnit == "l"){
        return currentNumber / 3.785;
      } else if (testUnit == "ml" || testUnit == "milliliter"){
        return currentNumber / 3785;
      } else if (testUnit == "tbsp" || testUnit == "tablespoon"){
        return currentNumber / 256;
      } else if (testUnit == "tsp" || testUnit == "teaspoon"){
        return currentNumber / 768;
      } else {
        return -1;
      }
  }

  toOunce(currentNumber, oldUnit){
      let testUnit = oldUnit.toLowerCase();
      if(testUnit == "cup" || testUnit == "cups" || testUnit == "c"){
        return currentNumber / .125;
      } else if (testUnit == "ounce" || testUnit == "oz"){
        return currentNumber;
      } else if (testUnit == "gallon"){
        return currentNumber / .0078;
      } else if (testUnit == "pt" || testUnit == "pint"){
        return currentNumber / .0625;
      } else if (testUnit == "g" || testUnit == "gram"){
        return -1;
      } else if (testUnit == "qt" || testUnit == "quart"){
        return currentNumber / .03125;
      } else if (testUnit == "lb" || testUnit == "pound"){
        return -1;
      } else if (testUnit == "liter" || testUnit == "l"){
        return currentNumber / 0.02957;
      } else if (testUnit == "ml" || testUnit == "milliliter"){
        return currentNumber / 29.57;
      } else if (testUnit == "tbsp" || testUnit == "tablespoon"){
        return currentNumber / 2;
      } else if (testUnit == "tsp" || testUnit == "teaspoon"){
        return currentNumber / 6;
      } else {
        return -1;
      }
    }

  toMilliliter(currentNumber, oldUnit){
      let testUnit = oldUnit.toLowerCase();
      if(testUnit == "cup" || testUnit == "cups" || testUnit == "c"){
        return currentNumber / .004227;
      } else if (testUnit == "ounce" || testUnit == "oz"){
        return currentNumber / .03381;
      } else if (testUnit == "gallon"){
        return currentNumber / .0002642;
      } else if (testUnit == "pt" || testUnit == "pint"){
        return currentNumber / .002113;
      } else if (testUnit == "g" || testUnit == "gram"){
        return -1;
      } else if (testUnit == "qt" || testUnit == "quart"){
        return currentNumber / .001057;
      } else if (testUnit == "lb" || testUnit == "pound"){
        return -1;
      } else if (testUnit == "liter" || testUnit == "l"){
        return currentNumber / .001;
      } else if (testUnit == "ml" || testUnit == "milliliter"){
        return currentNumber;
      } else if (testUnit == "tbsp" || testUnit == "tablespoon"){
        return currentNumber / .06763;
      } else if (testUnit == "tsp" || testUnit == "teaspoon"){
        return currentNumber / .2029;
      } else {
        return -1;
      }
    }

  toLiter(currentNumber, oldUnit){
      let testUnit = oldUnit.toLowerCase();
      if(testUnit == "cup" || testUnit == "cups" || testUnit == "c"){
        return currentNumber / 4.227;
      } else if (testUnit == "ounce" || testUnit == "oz"){
        return currentNumber / 33.81;
      } else if (testUnit == "gallon"){
        return currentNumber / .227;
      } else if (testUnit == "pt" || testUnit == "pint"){
        return currentNumber / 2.113;
      } else if (testUnit == "g" || testUnit == "gram"){
        return -1;
      } else if (testUnit == "qt" || testUnit == "quart"){
        return currentNumber / 1.057;
      } else if (testUnit == "lb" || testUnit == "pound"){
        return -1;
      } else if (testUnit == "liter" || testUnit == "l"){
        return currentNumber;
      } else if (testUnit == "ml" || testUnit == "milliliter"){
        return currentNumber / 1000;
      } else if (testUnit == "tbsp" || testUnit == "tablespoon"){
        return currentNumber / 67.63;
      } else if (testUnit == "tsp" || testUnit == "teaspoon"){
        return currentNumber / 202.9;
      } else {
        return -1;
      }
    }

    toTablespoon(currentNumber, oldUnit){
        let testUnit = oldUnit.toLowerCase();
        if(testUnit == "cup" || testUnit == "cups" || testUnit == "c"){
          return currentNumber / .0625;
        } else if (testUnit == "ounce" || testUnit == "oz"){
          return currentNumber;
        } else if (testUnit == "gallon"){
          return currentNumber / .003906;
        } else if (testUnit == "pt" || testUnit == "pint"){
          return currentNumber / .03125;
        } else if (testUnit == "g" || testUnit == "gram"){
          return -1;
        } else if (testUnit == "qt" || testUnit == "quart"){
          return currentNumber / .01562;
        } else if (testUnit == "lb" || testUnit == "pound"){
          return -1;
        } else if (testUnit == "liter" || testUnit == "l"){
          return currentNumber / .01479;
        } else if (testUnit == "ml" || testUnit == "milliliter"){
          return currentNumber / 14.79;
        } else if (testUnit == "tbsp" || testUnit == "tablespoon"){
          return currentNumber;
        } else if (testUnit == "tsp" || testUnit == "teaspoon"){
          return currentNumber / 3;
        } else {
          return -1;
        }
      }

      toTeaspoon(currentNumber, oldUnit){
          let testUnit = oldUnit.toLowerCase();
          if(testUnit == "cup" || testUnit == "cups" || testUnit == "c"){
            return currentNumber / .0625;
          } else if (testUnit == "ounce" || testUnit == "oz"){
            return currentNumber;
          } else if (testUnit == "gallon"){
            return currentNumber / .003906;
          } else if (testUnit == "pt" || testUnit == "pint"){
            return currentNumber / .01042;
          } else if (testUnit == "g" || testUnit == "gram"){
            return -1;
          } else if (testUnit == "qt" || testUnit == "quart"){
            return currentNumber / .005208;
          } else if (testUnit == "lb" || testUnit == "pound"){
            return -1;
          } else if (testUnit == "liter" || testUnit == "l"){
            return currentNumber / .04929;
          } else if (testUnit == "ml" || testUnit == "milliliter"){
            return currentNumber / 4.929;
          } else if (testUnit == "tbsp" || testUnit == "tablespoon"){
            return currentNumber / .3333;
          } else if (testUnit == "tsp" || testUnit == "teaspoon"){
            return currentNumber;
          } else {
            return -1;
          }
        }

        toGram(currentNumber, oldUnit){
            let testUnit = oldUnit.toLowerCase();
            if(testUnit == "lb" || testUnit == "pound"){
              return currentNumber * 453.6;
            } else if (testUnit == "gram" || testUnit == "g"){
              return currentNumber;
            } else {
              return -1;
            }
          }

        toPound(currentNumber, oldUnit){
            let testUnit = oldUnit.toLowerCase();
            if(testUnit == "lb" || testUnit == "pound"){
              return currentNumber;
            } else if (testUnit == "gram" || testUnit == "g"){
              return currentNumber / 453.6;
            } else {
              return -1;
            }
          }
}



module.exports = kitchenConverter;
