import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, tags, onPicked }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img src={webformatURL} alt={tags} className={s.ImageGalleryItemImage} onClick={onPicked} />
    </li>
  );
};

export default ImageGalleryItem;
