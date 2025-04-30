import React from "react";

const patientData = {
  name: "John Doe",
  age: 45,
  lungCapacity: "85%",
  oxygenSaturation: "98%",
  peakFlow: "450 L/min",
  respiratoryRate: "16 breaths/min",
  lastCheckup: "March 25, 2025",
};

const HealthRecords = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Patient Health Records</h1>
        <p className="text-lg text-gray-600 text-center mb-2">Name: {patientData.name}</p>
        <p className="text-lg text-gray-600 text-center mb-2">Age: {patientData.age}</p>
        <hr className="my-4" />
        <div className="space-y-3">
          <p className="text-lg"><strong>Lung Capacity:</strong> {patientData.lungCapacity}</p>
          <p className="text-lg"><strong>Oxygen Saturation:</strong> {patientData.oxygenSaturation}</p>
          <p className="text-lg"><strong>Peak Expiratory Flow:</strong> {patientData.peakFlow}</p>
          <p className="text-lg"><strong>Respiratory Rate:</strong> {patientData.respiratoryRate}</p>
        </div>
        <hr className="my-4" />
        <p className="text-gray-500 text-center">Last Checkup: {patientData.lastCheckup}</p>
      </div>
    </div>
  );
};

export default HealthRecords;
