import React, { Component } from 'react';
// import Card from 'react-toolbox/lib/card/Card';
// import CardMedia from 'react-toolbox/lib/card/CardMedia';
// import CardTitle from 'react-toolbox/lib/card/CardTitle';
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
}

export default App;
