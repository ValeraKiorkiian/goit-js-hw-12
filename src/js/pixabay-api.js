import axios from 'axios';

export async function getImages(userWords, page = 1, per_page) {
  const { data } = await axios(`https://pixabay.com/api/`, {
    params: {
      key: `49291442-2080f69002eb1568626ca7c49`,
      q: userWords,
      image_type: `photo`,
      orientation: `horizontal`,
      safesearch: true,
      page,
      per_page,
    },
  });

  return data;
}
