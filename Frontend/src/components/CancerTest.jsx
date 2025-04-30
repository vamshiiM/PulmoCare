import React, { useState } from 'react';

function CancerTest() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handlePredict = () => {
    // Simulated prediction logic
    setPrediction("Prediction: Malignant Tumor"); // Replace with actual ML model integration
  };

  return (
    <div className="p-4 m-32 max-w-md mx-auto border rounded-lg shadow-lg text-center">
      <h2 className="text-xl font-bold mb-4">Cancer Test</h2>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
        className="mb-4 border p-2 w-full"
      />
      {selectedImage && (
        <div className="mb-4">
          <img src={selectedImage} alt="Uploaded Preview" className="w-full h-auto rounded" />
        </div>
      )}
      <button 
        onClick={handlePredict} 
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Predict
      </button>
      {prediction && <p className="mt-4 text-lg font-semibold">{prediction}</p>}
    </div>
  );
}

export default CancerTest; 
