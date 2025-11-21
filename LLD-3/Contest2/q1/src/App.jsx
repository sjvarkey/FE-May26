import React,{ useState } from 'react'
import './App.css'

function App() {

  const [selectedFruit, setSelectedFruit] = useState('');

  const handleChange = (event) => {
    setSelectedFruit(event.target.value);
  };

  return (
    <div>
      <label htmlFor="fruits">Choose a fruit:</label>
      <select id="fruits" value={selectedFruit} defaultValue="" onChange={handleChange}>
        <option value="">None</option>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Cherry">Cherry</option>
      </select>
      <p>You selected: {selectedFruit || "None"}</p>
    </div>
  );
}

export default App
