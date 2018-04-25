let counter = 1;

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

  counter++;
};

const hideCard = (e) => {
  const hiddenAnimalType = e.target;

  if (hiddenAnimalType.classList.contains('hide')) {
    hiddenAnimalType.classList.remove('hide');
  }

};

const addEvents = () => {
  for (let i = 0; i < allMyButtons.length; i++) {
    allMyButtons[i].addEventListener('click', showCard);
    if (counter === 2) {
      allMyButtons[i].addEventListener('click', hideCard);
    }
    if (allMyButtons[i].classList.contains('clear-btn')) {
      const clearBtn = allMyButtons[i];
      if (counter === 1) {
        document.getElementById('clear-btn').disabled = true;
      } else if (counter > 1) {
        document.getElementById('clear-btn').disabled = false;
      }
      clearBtn.addEventListener('click', hideCard);
    };
  }
};

module.exports = addEvents;
