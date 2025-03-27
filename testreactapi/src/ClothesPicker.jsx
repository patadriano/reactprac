import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const ClothesPicker = ({ apiUrl, saveData }) => {
  const [images, setImages] = useState([]);
  const currentSlide = useRef(0); // Track the current slide using useRef
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setImages(response.data);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        setError("Failed to load images.");
      });
  }, [apiUrl]);

  // Update the parent with the current description when the slide changes
  const updateParentWithDescription = () => {
    if (images.length > 0) {
      const description = images[currentSlide.current].description;
      saveData(description); // Pass the description up to the parent
    }
  };

  const nextSlide = () => {
    if (images.length > 0) {
      currentSlide.current = (currentSlide.current + 1) % images.length;
      updateParentWithDescription(); // Save the new description after updating the slide
    }
  };

  const prevSlide = () => {
    if (images.length > 0) {
      currentSlide.current = (currentSlide.current - 1 + images.length) % images.length;
      updateParentWithDescription(); // Save the new description after updating the slide
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
            <p>{images[currentSlide.current].description}</p>
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
