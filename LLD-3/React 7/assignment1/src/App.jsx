import React, { useEffect, useState } from "react";

const STORAGE_KEY = "inputValue";

const App = () => {
  
  const [value, setValue] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) ?? "";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, value);
  }, [value]);

  return (
    <div>
      <input
        data-testid="input-id"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default App;
