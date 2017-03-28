import React, { Component } from 'react';
// import Card from 'react-toolbox/lib/card/Card';
// import CardMedia from 'react-toolbox/lib/card/CardMedia';
// import CardTitle from 'react-toolbox/lib/card/CardTitle';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    this.fetchPhotos();
  }

  render() {
    const { photos } = this.state;

    const images = photos.map(photo => {
      const photoUrl = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

      return (
        <div key={photo.id} className="App-photoContaner">
          <img src={photoUrl} alt={photo.title} className="App-photoImage" />
        </div>
      );
    });

    return (
      <div className="App">
        {images}
      </div>
    );
  }

  fetchPhotos() {
    let apiKey = '68e1a9642f4bcf64da41264307a7623d';
    let url = `https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=1&text=golden+retriever+puppies`;

    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ photos: json.photos.photo });
      })
      .catch(error => {
        console.error('Could not fetch photos', error);
      });
  }
}

export default App;
