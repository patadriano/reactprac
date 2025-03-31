import React, { useState, useEffect } from "react";
import axios from "axios";

const ClothesPicker = ({ apiUrl, saveData, descriptionKey }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setImages(response.data);
        setError(null);

        if (response.data.length > 0) {
          saveData(response.data[0].description, descriptionKey); 
        }
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        setError("Failed to load images.");
      });
  }, [apiUrl, saveData, descriptionKey]);  

  const updateParentWithDescription = () => {
    if (images.length > 0) {
      const description = images[currentSlide].description;
      saveData(description, descriptionKey); 
    }
  };

  const nextSlide = () => {
    if (images.length > 0) {
      const nextSlide = (currentSlide + 1) % images.length;
      setCurrentSlide(nextSlide);
      updateParentWithDescription(); 
    }
  };

  const prevSlide = () => {
    if (images.length > 0) {
      const prevSlide = (currentSlide - 1 + images.length) % images.length;
      setCurrentSlide(prevSlide);
      updateParentWithDescription();
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      {images.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <button onClick={prevSlide} disabled={images.length === 0}>
            {" < "}
          </button>
          <div>
            <p>{images[currentSlide].description}</p>
          </div>
          <button onClick={nextSlide} disabled={images.length === 0}>
            {" > "}
          </button>
        </>
      )}
    </div>
  );
};

export default ClothesPicker;
