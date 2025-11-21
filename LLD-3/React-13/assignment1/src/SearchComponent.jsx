import React, { useState, useEffect } from "react";

const dataList = [  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
  { id: 4, name: "Date" },
  { id: 5, name: "Elderberry" },
];

const ListItem = React.memo(function ListItem({ item }) {
  return <li key={item.id}>{item.name}</li>;
});

function SearchComponent() {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(dataList);

  useEffect(() => {
    // Set up debounce
    const handler = setTimeout(() => {
      const newFiltered = dataList.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
      setFilteredData(newFiltered);
    }, 700); // 500ms debounce delay

    // Cleanup timeout if query changes before 500ms
    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  const handleQueryChange = (event) => {
    setQuery(event.target.value.toLowerCase());
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder="Search"
      />
      <ul>
        {filteredData.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;
