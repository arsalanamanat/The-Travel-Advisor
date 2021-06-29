import { previousBtn, nextBtn } from '../constants.js';

function goToPreviousPage() {
  const page1 = document.querySelector('.page1');
  const page2 = document.querySelector('.page2');
  previousBtn.classList.add('hide');
  page1.classList.remove('hide');
  page2.classList.add('hide');
  nextBtn.classList.remove('hide');
}

export default goToPreviousPage;
