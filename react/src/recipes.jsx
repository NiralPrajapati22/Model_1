import React, { useState, useEffect } from 'react';

function Recipes() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {

      try {

        const response = await fetch('https://dummyjson.com/recipes');

        const json = await response.json();

        // Correct data
        setData(json.recipes);

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

      <h1
        style={{
          color: "blue",
          fontSize: "40px",
          textAlign: "center"
        }}
      >
        Recipe List
      </h1>

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
              boxShadow: "0 0 10px rgba(0,0,0,0.1)"
            }}
          >

            <img
              src={item.image}
              alt={item.name}
              width="200"
            />

            <h2>{item.name}</h2>

            <p>Cuisine: {item.cuisine}</p>

            <p>Rating: {item.rating}</p>

            <p>Difficulty: {item.difficulty}</p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Recipes;