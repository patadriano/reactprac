import React, { useState } from "react";
import ClothesPicker from "./ClothesPicker";

const Parent = () => {
    const [fetchedData, setFetchedData] = useState({
        description1: "",
        description2: "",
        description3: ""
      }); 

      const handleSaveData = (description, key) => {
        setFetchedData((prevData) => ({
          ...prevData,
          [key]: description, // Dynamically update the specific description based on the key
        }));
      };

  const handleSaveAllData = () => {
    // Log all the descriptions when the button is clicked
    console.log("All data saved:", fetchedData);
  };

  return (
    <React.StrictMode>
      <ClothesPicker
        apiUrl="https://localhost:7042/api/hello/yolo"
        saveData={(description) => handleSaveData(description, "description1")}
      />
      <ClothesPicker
        apiUrl="https://localhost:7042/api/hello/yeet"
        saveData={(description) => handleSaveData(description, "description2")}
      />
      <ClothesPicker
        apiUrl="https://localhost:7042/api/hello/yay"
        saveData={(description) => handleSaveData(description, "description3")}
      />

      <button onClick={handleSaveAllData}>Save All Data</button>
    </React.StrictMode>
  );
};

export default Parent;
