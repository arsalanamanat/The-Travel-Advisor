import { nextBtn, previousBtn } from '../constants.js';

function goToNextPage() {
  const page1 = document.querySelector('.page1');
  const page2 = document.querySelector('.page2');

  nextBtn.classList.add('hide');
  page1.classList.add('hide');
  page2.classList.remove('hide');
  previousBtn.classList.remove('hide');
}

export default goToNextPage;
