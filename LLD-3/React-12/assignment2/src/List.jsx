import React, { useState } from "react";

// Memoize ListItem to prevent unnecessary re-renders
const ListItem = React.memo(function ListItem({ text }) {
  console.log("Rendering", text);
  return <div>{text}</div>;
});

function List() {
  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {items.map((item, index) => (
        <ListItem key={index} text={item} />
      ))}
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      <p>Counter: {counter}</p>
    </div>
  );
}

export default List;
