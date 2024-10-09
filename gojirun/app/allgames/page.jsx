"use client"

import React, { useEffect, useState } from 'react';

const App = () => {
  const [deviceData, setDeviceData] = useState([]);

  // Simulating data coming from backend
  useEffect(() => {
    const fetchData = async () => {
      const dataFromBackend = [
        {
          score: 84,
          time: '2024-10-09T12:08:08.518Z',
          ipAddress: '2405:a140:a00:700:e505:7c17:3d56:15e0',
          deviceType: 'Chrome',
          userAgent:
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
        },
        {
          score: 438,
          time: '2024-10-09T12:08:02.707Z',
          ipAddress: '2405:a140:a00:700:e505:7c17:3d56:15e0',
          deviceType: 'Chrome',
          userAgent:
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
        },
      ];
      setDeviceData(dataFromBackend);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-black text-purple-300 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Device Information</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse block md:table">
            <thead className="block md:table-header-group">
              <tr className="border border-purple-500 md:border-none block md:table-row">
                <th className="bg-purple-800 p-2 text-left text-xs md:text-base font-semibold uppercase block md:table-cell">
                  Score
                </th>
                <th className="bg-purple-800 p-2 text-left text-xs md:text-base font-semibold uppercase block md:table-cell">
                  Time
                </th>
                <th className="bg-purple-800 p-2 text-left text-xs md:text-base font-semibold uppercase block md:table-cell">
                  IP Address
                </th>
                <th className="bg-purple-800 p-2 text-left text-xs md:text-base font-semibold uppercase block md:table-cell">
                  Device Type
                </th>
                <th className="bg-purple-800 p-2 text-left text-xs md:text-base font-semibold uppercase block md:table-cell">
                  User Agent
                </th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {deviceData.map((device, index) => (
                <tr
                  key={index}
                  className="bg-gray-900 border border-purple-500 md:border-none block md:table-row mb-4 md:mb-0"
                >
                  {/* Enhanced Score Display */}
                  <td className="p-2 block md:table-cell text-lg md:text-xl font-bold text-purple-400">
                    {device.score}
                  </td>

                  {/* Enhanced Time Display */}
                  <td className="p-2 block md:table-cell text-sm md:text-lg font-medium text-purple-200">
                    {new Date(device.time).toLocaleString('en-US', {
                      weekday: 'short',
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                    })}
                  </td>

                  {/* Enhanced IP Address Display */}
                  <td className="p-2 block md:table-cell text-sm md:text-base text-white bg-gray-800 rounded-lg px-2">
                    {device.ipAddress}
                  </td>

                  <td className="p-2 block md:table-cell text-sm md:text-base">{device.deviceType}</td>
                  <td className="p-2 block md:table-cell text-sm md:text-base truncate">{device.userAgent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
