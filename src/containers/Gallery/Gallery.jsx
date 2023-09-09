import { useState } from "react";
import "./Gallery.css";
import { galleryItems } from "../../constants/gallery";

const Gallery = () => {
  const [loadAll, setLoadAll] = useState(3);

  const loadHandler = () => {
    if(loadAll > 3){
      setLoadAll(3);
    } else{
      setLoadAll(galleryItems.length);
    }
  }
  
  const galleryFilterItems = galleryItems.filter((item, index, array) => {
    return index < loadAll;
  });
  return (
    <div className="full-container gallery">
      <div className="fix-container gallery__section">
        <h2>Gallery</h2>
        <div className="gallery__section__items d-flex gap-3">
          {galleryFilterItems.map((item) => (
            <div className="gallery__section__item">
              <img src={item.thumbnail} alt="gallery" />
              <div className="gallery_desc">
                <h3>{item.type}</h3>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="load_more">
        <button onClick={loadHandler}>{loadAll > 3 ? 'See Less' : 'See More'}</button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
