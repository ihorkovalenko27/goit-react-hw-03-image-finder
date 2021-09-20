function searchImages(name, page) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=22609546-eb8daebfdd1e346a58a9b181d&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Sorry! We did not find this request`));
  });
}

export default searchImages;
