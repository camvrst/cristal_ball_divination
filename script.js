import './styles.scss';
import { reponses } from './src/data';

const diviBtn = document.getElementById('divinationBtn');
const questionIpt = document.getElementById('question');
const reponse = document.querySelector('.reponse');
const reponseP = document.querySelector('.reponse > p');
const magicOne = document.querySelector('.magic-one');
const magicTwo = document.querySelector('.magic-two');

diviBtn.addEventListener('click', () => {
  if (questionIpt.value.trim() !== '') {
    reponse.style.display = 'block';
    reponseP.innerHTML = 'Divination en cours...';
    magicOne.style.display = 'block';
    magicTwo.style.display = 'block';

    setTimeout(() => {
      const randomReponse = reponses[Math.floor(Math.random() * reponses.length)];
      reponseP.innerHTML = randomReponse;
      questionIpt.value = null;
      magicOne.style.display = 'none';
      magicTwo.style.display = 'none';
    }, 3000);
  } else {
    reponse.style.display = 'none';
  }
});
