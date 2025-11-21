import React from "react";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import { NotificationProvider } from "./NotificationContext";

function App() {
  return (
    <NotificationProvider>
      <div>
        <Dashboard />
        <Footer />
      </div>
    </NotificationProvider>
  );
}

export default App;
