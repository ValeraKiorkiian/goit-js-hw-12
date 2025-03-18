// iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconError from './img/cancel.png';
// import functions
import { getImages } from './js/pixabay-api';
import { renderGallery, cleanGallery } from './js/render-functions';

const iziToastContent = {
  message:
    'Sorry, there are no images matching your search query. Please try again',
  iconUrl: iconError,
  position: 'topRight',
  messageColor: '#fff',
  backgroundColor: '#ef4040',
  theme: 'dark',
  maxWidth: '432px',
};

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');

form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const userAnswer = event.currentTarget.elements.searchText.value.trim();
  if (!userAnswer) {
    return;
  }
  cleanGallery();
  showLoader();
  getImages(userAnswer)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.show(iziToastContent);
        return;
      }
      renderGallery(hits);
    })
    .catch(error => {
      console.log(error);
      iziToast.error(iziToastContent);
    })
    .finally(() => {
      form.reset();
      hideLoader();
    });
}

function showLoader() {
  loader.style.display = 'flex';
}
function hideLoader() {
  loader.style.display = 'none';
}
