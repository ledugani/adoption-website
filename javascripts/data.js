const loadAnimals = require('./pets');
const printToDom = require('./dom');

let animalArray = [];

const whenAnimalsLoad = function () {
  animalArray = JSON.parse(this.responseText).pets;
  printToDom(animalArray);
};

const badAnimals = function () {
  console.error('shit broke, yo');
};

const initializer = () => {
  loadAnimals(whenAnimalsLoad, badAnimals);
};

const getAnimals = () => {
  return animalArray;
};

module.exports = {
  initializer,
  getAnimals,
};
