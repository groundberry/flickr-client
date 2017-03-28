import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './toolbox/theme'
import App from './App';
import './index.css';

const imageUrls = [
  '../img/golden_1.jpg',
  '../img/golden_2.jpg',
  '../img/golden_3.jpg',
  '../img/golden_4.jpg'
]

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App imageUrls={imageUrls} />
  </ThemeProvider>,
  document.getElementById('root')
);
