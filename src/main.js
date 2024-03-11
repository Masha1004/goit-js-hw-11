import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api';
import { gallery, renderImages } from './js/render-functions';

const searchForm = document.querySelector('.js-form');
const button = document.querySelector('button');
const loader = document.querySelector('.loader');

const getErrorMessage = (message, messageColor) =>
  iziToast.show({
    message,
    messageColor,
    position: 'topCenter',
  });

searchForm.addEventListener('submit', evt => {
  evt.preventDefault();
  gallery.innerHTML = '';
  const value = evt.currentTarget.elements['js-input'].value;

  if (value) {
    button.disabled = true;
    loader.style.display = 'block';
    fetchImages(value)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        if (data.hits.length) {
          renderImages(data.hits);
        } else {
          getErrorMessage(
            'Sorry, there are no images matching your search query. Please try again!', 'green');
        }
      })
      .catch(error => getErrorMessage('Something went wrong. Please try again', 'red'))
      .finally(() => {
        button.disabled = false;
        loader.style.display = 'none';
      });
  }

  searchForm.reset();
});
