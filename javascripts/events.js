const allMyButtons = document.getElementsByClassName('buttons');

const showCard = (e) => {
  console.log(e);
  const animalType = e.target;
  animalType.classList.add('bright-color');

};

const hideCard = (e) => {
  const dinoType = e.target;
  dinoType.classList.remove('bright-color');
};

const addEvents = () => {
  for (let i = 0; i < allMyButtons.length; i++) {

    if (allMyButtons[i].contains('dog-btn')) {

      allMyButtons[i].addEventListener('click', showCard);
      allMyButtons[i].addEventListener('click', hideCard);

    } else if (allMyButtons[i].contains('dog-btn')) {

      allMyButtons[i].addEventListener('click', showCard);
      allMyButtons[i].addEventListener('click', hideCard);

    } else {

      allMyButtons[i].addEventListener('click', showCard);
      allMyButtons[i].addEventListener('click', hideCard);

    }
  }
};

module.exports = addEvents;
