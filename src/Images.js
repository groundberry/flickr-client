import React from 'react';
import { getPhotoUrl } from './utils';
import './Images.css';

export default function Images (props) {
  return (
    <div className="Images">
      {props.photos.map(photo => (
        <img
          className="Images-image"
          src={getPhotoUrl(photo)}
          key={photo.id}
          alt={photo.title}
        />
      ))}
    </div>
  );
}
