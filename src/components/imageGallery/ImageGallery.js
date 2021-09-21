import React from 'react';
import ImagesGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, onPicked }) => {
  return (
    <ul className={s.ImageGallery}>
      {images &&
        images.map(({ id, webformatURL, largeImageURL, tags }) => {
          const selectImage = () => onPicked(largeImageURL);
          return (
            <ImagesGalleryItem
              key={id}
              webformatURL={webformatURL}
              onPicked={selectImage}
              tags={tags}
            />
          );
        })}
    </ul>
  );
};

export default ImageGallery;
