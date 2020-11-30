const URL = `https://pixabay.com/api/`;
const API_KEY = '14998986-82322fa46abf8765da09830ba';

export default class NewsApiService{
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.img = 0;
   }
  
  async fetchImage() {
    const responseUrl = await fetch(`${URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`);
    const { hits } = await responseUrl.json();
    this.incrementPage();
    return hits;
  
  }
  //  fetchImage() {
  //  return fetch(`${URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`).
  //     then(r => r.json()).
  //    then(({hits}) => {
  //      this.incrementPage();
  //      return hits;});
  // }

   incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
    this.img = 0;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

