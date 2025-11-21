import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
      <div>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder=""
        />
        <div>
        Character count: {text.length}
      </div>
      </div>
  );
}

export default App;