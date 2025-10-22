import React, { useState } from "react";

function InputBox(props) {
  const { addTask } = props;
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const addTaskChild = () => {
    if (inputValue.trim() === "") return;
    addTask(inputValue.trim());
    setInputValue("");
  };
  return (
    <div className="inputbox">
      <input type="text" value={inputValue} onChange={handleInput} />

      <button onClick={addTaskChild}>Add Task</button>
    </div>
  );
}

export default InputBox;