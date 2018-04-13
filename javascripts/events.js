const allMyButtons = document.getElementsByClassName('buttons');

const showCard = (e) => {

  const animalType = e.target;

  const dogs = document.getElementsByClassName('dog');
  const cats = document.getElementsByClassName('cat');
  const dino = document.getElementsByClassName('dino');

  if (animalType.classList.contains('dog-btn')) {
    cats.classList.add('hide');
    dinos.classList.add('hide');
  } else if (animalType.classList.contains('dino-btn')) {
    dogs.classList.add('hide');
    cats.classList.add('hide');
  } else if (animalType.classList.contains('cat-btn')) {
    dogs.classList.add('hide');
    dinos.classList.add('hide');
  }
};

// const hideCard = (e) => {
//   const dinoType = e.target;
//   dinoType.classList.remove('bright-color');
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
