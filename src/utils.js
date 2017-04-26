import { stringify } from 'qs';

const serverUrl = 'https://flickr-proxy.herokuapp.com/';
const defaultQuery = 'golden retriever puppies';

export function fetchPhotos(params) {
  params.query = params.query || defaultQuery;

  const url = `${serverUrl}?${stringify(params)}`;

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json.photos.photo;
    })
    .catch(error => {
      console.error('Could not fetch photos', error);
    });
}

export function getPhotoUrl(photo) {
  return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
}

export function getQueryParams(query) {
  const encodedQuery = query.substring(1).replace(/\+/g, '%20');
  const decodedQuery = decodeURIComponent(encodedQuery);
  const pairs = decodedQuery.split('&').map((str) => str.split('='));
  return pairs.reduce((memo, pair) => {
    memo[pair[0]] = pair[1];
    return memo;
  }, {});
}
