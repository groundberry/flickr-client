import { parse, stringify } from "qs";

const serverUrl = "https://flickr-proxy.herokuapp.com/";
const defaultQuery = "golden retriever puppies";

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
      console.error("Could not fetch photos", error);
    });
}

export function getPhotoUrl(photo) {
  return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${
    photo.id
  }_${photo.secret}.jpg`;
}

export function getQueryParams(query) {
  return parse(query.substr(1));
}
