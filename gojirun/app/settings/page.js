"use client"
import React, { useState } from 'react';
import { useTheme } from 'next-themes'; // For theme switching
import { useUser } from '@clerk/nextjs';

function Settings() {
  const { setTheme, theme } = useTheme(); // Get theme setter and current theme
  const { user } = useUser();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 m-5">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Settings</h2>
      
      {/* Profile Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">Profile Settings</h3>
        <div className="flex flex-col gap-4">
          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">Full Name</span>
            <input
              type="text"
              className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Full Name"
              value={user?.fullName || ''} // Display user's name from Kinde
              disabled
            />
          </label>
          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">Email</span>
            <input
              type="email"
              className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Email Address"
              value={user?.primaryEmailAddress?.emailAddress || ''} // Display user's email from Kinde
              disabled
            />
          </label>
        </div>
      </div>

      {/* Preferences Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">Preferences</h3>

        <div className="flex items-center justify-between">
          <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={theme === 'dark'}
              onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600">
              <div className="peer-checked:translate-x-6 peer-checked:translate-y-0.5 transform translate-x-1 translate-y-0.5 w-5 h-5 bg-white rounded-full transition-all"></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Settings;
