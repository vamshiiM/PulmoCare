import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FF8042"];

const ChartCard = ({ title, children, value }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg transition-transform hover:scale-105 flex flex-col items-center w-full h-80 relative">
    <h2 className="text-2xl font-semibold mb-2 text-gray-700">{title}</h2>
    <p className="text-lg font-medium text-gray-600 mb-4">Current Value: {value}</p>
    <div className="w-full h-full">{children}</div>
  </div>
);

const HealthRecords = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [lungCapacityData, setLungCapacityData] = useState([]);
  const [oxygenSaturationData, setOxygenSaturationData] = useState([]);
  const [peakFlowData, setPeakFlowData] = useState([]);
  const [respiratoryRateData, setRespiratoryRateData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setLungCapacityData([
        { day: "Mon", capacity: Math.random() * 20 + 70 },
        { day: "Tue", capacity: Math.random() * 20 + 70 },
        { day: "Wed", capacity: Math.random() * 20 + 70 },
        { day: "Thu", capacity: Math.random() * 20 + 70 },
        { day: "Fri", capacity: Math.random() * 20 + 70 },
      ]);
      setOxygenSaturationData([
        { day: "Mon", saturation: Math.random() * 5 + 95 },
        { day: "Tue", saturation: Math.random() * 5 + 95 },
        { day: "Wed", saturation: Math.random() * 5 + 95 },
        { day: "Thu", saturation: Math.random() * 5 + 95 },
        { day: "Fri", saturation: Math.random() * 5 + 95 },
      ]);
      setPeakFlowData([
        { day: "Mon", peakFlow: Math.random() * 50 + 400 },
        { day: "Tue", peakFlow: Math.random() * 50 + 400 },
        { day: "Wed", peakFlow: Math.random() * 50 + 400 },
        { day: "Thu", peakFlow: Math.random() * 50 + 400 },
        { day: "Fri", peakFlow: Math.random() * 50 + 400 },
      ]);
      setRespiratoryRateData([
        { name: "Normal", value: Math.random() * 50 + 50 },
        { name: "Mild Issue", value: Math.random() * 30 + 10 },
        { name: "Severe Issue", value: Math.random() * 20 },
      ]);
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [selectedDate]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 p-8 bg-gray-100 min-h-screen">
      <div className="col-span-1 md:col-span-2 xl:col-span-2 text-center text-4xl font-bold text-gray-800 mb-6">Patient Health Dashboard</div>

      <div className="col-span-1 md:col-span-2 xl:col-span-2 flex justify-center mb-8">
        <Calendar onChange={setSelectedDate} value={selectedDate} className="p-4 rounded-xl shadow-lg bg-white" />
      </div>

      <ChartCard title="Lung Capacity Over Time" value={lungCapacityData[0]?.capacity.toFixed(2)}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lungCapacityData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="capacity" stroke="#8884d8" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Oxygen Saturation Levels" value={oxygenSaturationData[0]?.saturation.toFixed(2)}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={oxygenSaturationData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="saturation" fill="#82ca9d" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Peak Expiratory Flow Rate" value={peakFlowData[0]?.peakFlow.toFixed(2)}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={peakFlowData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="peakFlow" stroke="#ffc658" fill="#ffc658" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Respiratory Rate Distribution" value={`${respiratoryRateData[0]?.value.toFixed(2)}% Normal`}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={respiratoryRateData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
              {respiratoryRateData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>

      <div className="col-span-1 md:col-span-2 xl:col-span-2 text-center text-lg text-gray-600 mt-8">
        Viewing records for: {selectedDate.toDateString()} | Data updates every 5 seconds.
      </div>
    </div>
  );
};

export default HealthRecords;
