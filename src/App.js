import React, { Component } from 'react';
import { getQueryParams, fetchPhotos } from './utils';
import Header from './Header';
import Images from './Images';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    const params = getQueryParams();

    this.state = {
      ...params,
      photos: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ query: evt.target.value });
  }

  componentDidMount() {
    const { photos, ...params } = this.state;

    fetchPhotos(params)
      .then(photos => {
        this.setState({ photos });
      });
  }

  render() {
    const { query, photos } = this.state;

    return (
      <div className="App">
        <Header
          query={query}
          onChange={this.handleChange}
        />
        <Images
          photos={photos}
        />
      </div>
    );
  }
}
