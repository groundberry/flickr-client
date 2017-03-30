import React, { Component } from 'react';
import { getQueryParams, fetchPhotos, getPhotoUrl } from './utils';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    const params = getQueryParams();
    fetchPhotos(params)
      .then(photos => {
        this.setState({ photos });
      });
  }

  render() {
    const { photos } = this.state;

    const images = photos.map(photo => {
      const photoUrl = getPhotoUrl(photo);

      return (
        <div key={photo.id} className="App-image">
          <img src={photoUrl} alt={photo.title} />
        </div>
      );
    });

    return (
      <div className="App">
        <h1 className="App-header">Your photos</h1>
        <div className="App-images">
          {images}
        </div>
      </div>
    );
  }
}

export default App;
