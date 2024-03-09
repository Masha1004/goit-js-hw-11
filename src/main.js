import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImg } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const form = document.querySelector('.js-form');
const button = document.querySelector('button');
const loader = document.querySelector('.loader');

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const value = evt.currentTarget.elements['js-input'].value;

  if (value) {
    button.disabled = true;
    loader.style.display = 'block';
    getImg(value)
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
          iziToast.show({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            messageColor: 'green',
            position: 'topCenter',
          });
        }
      })
      .catch(error => {
        iziToast.show({
          message: 'Something went wrong. Please try again',
          messageColor: 'red',
          position: 'topCenter',
        });
      })
      .finally(() => {
        button.disabled = false;
        loader.style.display = 'none';
      });
  }

  form.reset();
});
