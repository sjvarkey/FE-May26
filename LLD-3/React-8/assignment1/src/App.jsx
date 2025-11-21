import React from "react";
import UserSettings from "./UserSettings";
import Profile from "./Profile";
import { SettingsProvider } from "./SettingsContext";

function App() {
  return (
    <SettingsProvider>
      <div>
        <UserSettings />
        <Profile />
      </div>
    </SettingsProvider>
  );
}

export default App;