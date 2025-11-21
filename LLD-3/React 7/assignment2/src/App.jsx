import React, { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  // Keep localStorage in sync whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {
      // ignore write errors
    }
  }, [key, state]);

  const setValue = (valueOrUpdater) => {
    setState((prev) =>
      typeof valueOrUpdater === "function" ? valueOrUpdater(prev) : valueOrUpdater
    );
  };

  return { value: state, setValue };
};

const App = () => {
  const { value, setValue } = useLocalStorage("inputValue", "");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default App;
