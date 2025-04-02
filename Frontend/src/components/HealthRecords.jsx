import React, { useState } from "react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const patientHealthData = [
  { month: "Jan", healthScore: 60 },
  { month: "Feb", healthScore: 65 },
  { month: "Mar", healthScore: 70 },
  { month: "Apr", healthScore: 75 },
  { month: "May", healthScore: 80 },
];

const userRecords = [
  { date: "2024-01-10", diagnosis: "Lung Infection", status: "Under Treatment" },
  { date: "2024-02-15", diagnosis: "Stable", status: "Improving" },
  { date: "2024-03-20", diagnosis: "Recovering", status: "Good Progress" },
  { date: "2024-04-25", diagnosis: "Healthy", status: "Recovered" },
];

const healthRadarData = [
  { aspect: "Lung Function", score: 80 },
  { aspect: "Endurance", score: 70 },
  { aspect: "Breathing Ease", score: 75 },
  { aspect: "Energy Levels", score: 85 },
];

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-200 p-10">
      <h1 className="text-4xl font-extrabold text-center text-green-800 mb-10">Your Health Progress</h1>
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-2xl mb-10"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Health Improvement Over Time</h2>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={patientHealthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="month" stroke="#8884d8" />
            <YAxis stroke="#8884d8" domain={[50, 100]} />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="healthScore" stroke="#4CAF50" fill="#A5D6A7" strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-2xl mb-10"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Overall Health Analysis</h2>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={healthRadarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="aspect" />
            <PolarRadiusAxis domain={[0, 100]} />
            <Radar name="Health" dataKey="score" stroke="#FF9800" fill="#FFCC80" fillOpacity={0.6} />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-2xl"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Medical Records</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3">Date</th>
              <th className="border p-3">Diagnosis</th>
              <th className="border p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {userRecords.map((record, index) => (
              <tr key={index} className="text-center">
                <td className="border p-3">{record.date}</td>
                <td className="border p-3">{record.diagnosis}</td>
                <td className="border p-3 text-green-600 font-semibold">{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default UserDashboard;
