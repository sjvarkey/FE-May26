import React, { createContext, useState } from "react";

export const NotificationContext = createContext({
  notifications: [],
  addNotification: () => {},
});

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (note) => {
    setNotifications((prev) => [...prev, note]);
  };

  const value = { notifications, addNotification };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};