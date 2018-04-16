const allMyButtons = document.getElementsByClassName('buttons');

const showCard = (e) => {

  const animalType = e.target;

  const dogs = document.getElementsByClassName('dog');
  const cats = document.getElementsByClassName('cat');
  const dinos = document.getElementsByClassName('dino');

  if (animalType.classList.contains('dog-btn')) {
    for (let x = 0; x < cats.length; x++) {
      cats.classList.add('hide');
    }
    for (let y = 0; y < dinos.length; y++) {
      dinos.classList.add('hide');
    }
  } else if (animalType.classList.contains('dino-btn')) {
    for (let x = 0; x < cats.length; x++) {
      cats.classList.add('hide');
    }
    for (let y = 0; y < dinos.length; y++) {
      dogs.classList.add('hide');
    }
  } else if (animalType.classList.contains('cat-btn')) {
    for (let x = 0; x < cats.length; x++) {
      dogs.classList.add('hide');
    }
    for (let y = 0; y < dinos.length; y++) {
      dinos.classList.add('hide');
    }
  }
};

// const hideCard = (e) => {
//   const dinoType = e.target;
//   dinoType.classList.remove('hide');
// };

const addEvents = () => {
  for (let i = 0; i < allMyButtons.length; i++) {

    allMyButtons[i].addEventListener('click', showCard);
    //   allMyButtons[i].addEventListener('click', hideCard);
    // if (allMyButtons[i].parentNode.contains('dog-btn')) {

    //   allMyButtons[i].addEventListener('click', showCard);
    //   allMyButtons[i].addEventListener('click', hideCard);

    // } else if (allMyButtons[i].contains('dino-btn')) {

    //   allMyButtons[i].addEventListener('click', showCard);
    //   allMyButtons[i].addEventListener('click', hideCard);

    // } else {

    //   allMyButtons[i].addEventListener('click', showCard);
    //   allMyButtons[i].addEventListener('click', hideCard);

    // }
  }
};

module.exports = addEvents;
