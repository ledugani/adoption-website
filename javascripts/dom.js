const domEvents = require('./events');

const outputDiv = document.getElementById('card-holder');

const domString = (animals) => {
  let domString = '';
  animals.forEach((animal) => {

    if (animal.type === 'dog') {
      domString += `<div class='col-sm-4 dog'>`;
    } else if (animal.type === 'dino') {
      domString += `<div class='col-sm-4 dino'>`;
    } else {
      domString += `<div class='col-sm-4 cat'>`;
    }

    domString +=  `<div class="panel panel-default ">`;
    domString +=    `<div class="panel-heading">`;
    domString +=      `<h3 class='panel-title'>${animal.name}</h3>`;
    domString +=    `</div>`;
    domString +=    `<div class='panel-body'>`;
    domString +=      `<img src='${animal.imageUrl}' class='charImage'>`;
    domString +=      `<p class='animalColor'>${animal.color}</p>`;
    domString +=      `<p class='specialSkill'>${animal.specialSkill}</p>`;
    domString +=    `</div>`;

    if (animal.type === 'dog') {
      domString +=    `<div class="panel-footer info">Dog</div>`;
    } else if (animal.type === 'dino') {
      domString +=    `<div class="panel-footer success">Dino</div>`;
    } else {
      domString +=    `<div class="panel-footer danger">Cat</div>`;
    }
    domString +=  `</div>`;
    domString += `</div>`;
  });
  return domString;
};

const printToDom = (animalArray) => {
  outputDiv.innerHTML = domString(animalArray);
  domEvents();
};

module.exports = printToDom;
