import React from 'react';
import Form from './Form';
import './Header.css';

export default function Header (props) {
  return (
    <header className="Header">
      <h1 className="Header-name">
        Flickr Search
      </h1>
      <div className="Header-form">
        <Form
          query={props.query}
          onChange={props.onChange}
        />
      </div>
    </header>
  );
}
