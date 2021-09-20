import React from 'react';
import ImagesGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, onPicked }) => {
  return (
    <ul className={s.ImageGallery}>
      {images &&
        images.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <ImagesGalleryItem
              key={id}
              webformatURL={webformatURL}
              onPicked={() => onPicked(largeImageURL)}
              tags={tags}
            />
          );
        })}
    </ul>
  );
};

export default ImageGallery;
