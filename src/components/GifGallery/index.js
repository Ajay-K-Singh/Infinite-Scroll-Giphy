import React, { useState, useEffect } from "react";
import Gallery from "react-photo-gallery";
import './styles.scss'
const GifGallery = ({gifs}) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const photos = gifs.map((gif) => {
      return {
				src: gif.images[`480w_still`].url,
				width: Number(gif.images.downsized_still.width),
				height: Number(gif.images.downsized_still.height),
        gif: gif.images.downsized.url
			}
    })
		setPhotos(photos);
  }, [gifs]);

  const onImageClick = (e, element) => {
    if (e.target.src.match(/jpg/)) {
      e.target.src = element.photo.gif
    } else {
      e.target.src = element.photo.src;
    }
  }

  return (
    <div style={{padding: "16px"}} id="gallery">
      {photos && photos.length ? 
        <Gallery photos={photos} onClick={onImageClick} /> : ''}
      {photos && photos.length === 0 && 
        <h4 className="search-text">Search for your favourite gifs</h4>
      }
    </div>
  );
}

export default GifGallery;