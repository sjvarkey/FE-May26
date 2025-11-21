import React, { useEffect, useState } from "react";

function GetData() {
  // using state management, manage
  // error, loading and success states
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchData() {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      if (!res.ok) throw new Error("Network response was not ok");
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // call the fetch data function when the
  // page loads

  // Here is the basic data boilerplate
  if (loading) return <h2>Loading data</h2>;
  if (error) return <h2>Error fetching data</h2>;

  return (
    <>
      {/* do not edit the code below this line */}
      <h2>Name: {data.name}</h2>
      <h2>Email: {data.email}</h2>
      <h2>Username: {data.username}</h2>
    </>
  );
}

export default GetData;
