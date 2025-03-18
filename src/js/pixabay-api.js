import axios from 'axios';

export function getImages(userWords) {
  return axios(`https://pixabay.com/api/`, {
    params: {
      key: `49291442-2080f69002eb1568626ca7c49`,
      q: userWords,
      image_type: `photo`,
      orientation: `horizontal`,
      safesearch: true,
    },
  }).then(response => response.data);
}
