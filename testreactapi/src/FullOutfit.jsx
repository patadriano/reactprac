import React, { useState, useEffect } from "react";
import axios from "axios";
import ClothesPicker from "./ClothesPicker";

const ParentComponent = () => {
  const [fetchedData, setFetchedData] = useState({
    description1: null,
    description2: null,
    description3: null,
  });

  useEffect(() => {
    axios
      .get("https://localhost:7042/api/hello/initial")
      .then((response) => {
        setFetchedData({
          description1: response.data[0].description1,
          description2: response.data[0].description2,
          description3: response.data[0].description3,
        });
      });
  }, []);

  // Handle saving data with dynamic keys
  const handleSaveData = (description, key) => {
    setFetchedData((prevData) => ({
      ...prevData,
      [key]: description, 
    }));
  };

  const handleSaveAllData = () => {
    console.log("All data saved:", fetchedData);
  };

  return (
    <div>
      <ClothesPicker
        apiUrl="https://localhost:7042/api/hello/yolo"
        saveData={handleSaveData}
        descriptionKey="description1" 
      />
      <ClothesPicker
        apiUrl="https://localhost:7042/api/hello/yeet"
        saveData={handleSaveData}
        descriptionKey="description2" 
      />
      <ClothesPicker
        apiUrl="https://localhost:7042/api/hello/yay"
        saveData={handleSaveData}
        descriptionKey="description3" 
      />

      <button onClick={handleSaveAllData}>Save All Data</button>
    </div>
  );
};

export default ParentComponent;
