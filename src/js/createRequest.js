export const createRequest = function (value, page) {
  return fetch(
    `https://pixabay.com/api?key=31776776-892f87ec0bcca7b792e7dfca0&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
  ).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
};
