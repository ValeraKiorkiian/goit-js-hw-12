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
let page = 1;
let userAnswer = '';
const per_page = 15;

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.pagination-btn');

form.addEventListener(`submit`, onFormSubmit);
loadMoreBtn.addEventListener(`click`, onLoadMoreBtnClick);

async function onFormSubmit(event) {
  event.preventDefault();
  userAnswer = event.currentTarget.elements.searchText.value.trim();
  hideLoadMoreBtn();

  if (!userAnswer) {
    iziToast.error({
      message: 'Please,enter search word',
      position: 'topRight',
    });
    return;
  }
  page = 1;
  cleanGallery();
  showLoader();
  try {
    const { hits, totalHits } = await getImages(userAnswer, page, per_page);

    if (hits.length === 0) {
      iziToast.show(iziToastContent);
      return;
    }

    renderGallery(hits);
    showLoadMoreBtn();
    if (page * per_page >= totalHits) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        messageColor: '#FAFAFB',
      });
      console.log('end');

      hideLoadMoreBtn();
    }
  } catch (error) {
    console.log(error);
    iziToast.error(iziToastContent);
  } finally {
    form.reset();
    hideLoader();
  }
}

async function onLoadMoreBtnClick() {
  showLoader();
  page++;
  try {
    const { hits, totalHits } = await getImages(userAnswer, page, per_page);
    renderGallery(hits);
    const { height } = document
      .querySelector(`.gallery-item`)
      .getBoundingClientRect();

    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });

    if (page * per_page >= totalHits) {
      hideLoadMoreBtn();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        messageColor: '#FAFAFB',
      });
    }
  } catch (error) {
    console.log(error);
    iziToast.error(iziToastContent);
  } finally {
    hideLoader();
  }
}

function showLoader() {
  loader.style.display = 'flex';
}
function hideLoader() {
  loader.style.display = 'none';
}

function showLoadMoreBtn() {
  loadMoreBtn.style.display = 'block';
}
function hideLoadMoreBtn() {
  loadMoreBtn.style.display = 'none';
}
