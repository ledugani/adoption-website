// let counter = 1;

const allMyButtons = document.getElementsByClassName('buttons');

const showCard = (e) => {

  const animalType = e.target;

  const dogs = document.getElementsByClassName('dog');
  const cats = document.getElementsByClassName('cat');
  const dinos = document.getElementsByClassName('dino');

  if (animalType.classList.contains('dog-btn')) {

    for (let x = 0; x < cats.length; x++) {
      cats[x].classList.add('hide');
    }
    for (let y = 0; y < dinos.length; y++) {
      dinos[y].classList.add('hide');
    }

    hideCard('dog-btn');

  } else if (animalType.classList.contains('dino-btn')) {

    for (let x = 0; x < cats.length; x++) {
      cats[x].classList.add('hide');
    }
    for (let y = 0; y < dogs.length; y++) {
      dogs[y].classList.add('hide');
    }

  } else if (animalType.classList.contains('cat-btn')) {

    for (let x = 0; x < dogs.length; x++) {
      dogs[x].classList.add('hide');
    }
    for (let y = 0; y < dinos.length; y++) {
      dinos[y].classList.add('hide');
    }
  }
};

const hideCard = (animalButt) => {
  // const hiddenAnimalType = e.target.parentNode.parentNode.parentNode.children[1].childNodes;
  const animalButton = document.getElementById(`${animalButt}`);
  animalButton.addEventListener('click', (animal) => {
    const newAnimal = document.getElementsByClassName('hide');
    console.log(newAnimal);
  });
};

const addEvents = () => {
  for (let i = 0; i < allMyButtons.length; i++) {
    allMyButtons[i].addEventListener('click', showCard);
  }
};

module.exports = addEvents;
