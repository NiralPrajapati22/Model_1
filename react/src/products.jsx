import React, { useState, useEffect } from 'react';

function DataFetcher() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {

      try {

        const response = await fetch('https://dummyjson.com/products');

        const json = await response.json();

        setData(json.products);

      } catch (error) {

        console.error("Fetch Error:", error);

      } finally {

        setLoading(false);

      }
    };

    fetchData();

  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (

  <div>

    <h1 style={{ color: "blue", fontSize: "40px",textAlign : "center" }}>Products List</h1>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        padding: "20px"
      }}
    >

      {data.map((item) => (

        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            textAlign: "center",
          }}
        >

          <img
            src={item.thumbnail}
            alt={item.title}
            width="150"
          />

          <h2>{item.title}</h2>

          <p>Price: ${item.price}</p>

          <p>Category: {item.category}</p>

          <p>Rating: {item.rating}</p>

        </div>

      ))}

    </div>

  </div>
);
}

export default DataFetcher;