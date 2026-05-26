import React, { useState, useEffect } from 'react';
import Header from './header';

function Cart() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {

      try {

        const response = await fetch('https://dummyjson.com/carts');

        const json = await response.json();

        // Correct data
        setData(json.carts);

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
    <>
    <Header />
    <div
      style={{
        backgroundColor: "#EAEDED",
        padding: "20px",
        minHeight: "100vh"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px"
        }}
      >
        Amazon Cart UI
      </h1>

      {data.map((cart) => (

        <div
          key={cart.id}
          style={{
            backgroundColor: "white",
            marginBottom: "20px",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 5px rgba(0,0,0,0.2)"
          }}
        >

          <h2>Cart ID: {cart.id}</h2>

          <p>Total Products: {cart.totalProducts}</p>

          <p>Total Quantity: {cart.totalQuantity}</p>

          <p>Total Price: ${cart.total}</p>

          <hr />

          {cart.products.map((product) => (

            <div
              key={product.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                padding: "15px 0",
                borderBottom: "1px solid #ddd"
              }}
            >

              <img
                src={product.thumbnail}
                alt={product.title}
                width="120"
                style={{
                  borderRadius: "10px"
                }}
              />

              <div>

                <h3>{product.title}</h3>

                <p>Price: ${product.price}</p>

                <p>Quantity: {product.quantity}</p>

                <p>Total: ${product.total}</p>

                <button
                  style={{
                    backgroundColor: "#FFD814",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "20px",
                    cursor: "pointer"
                  }}
                >
                  Buy Now
                </button>

              </div>

            </div>

          ))}

        </div>

      ))}

    </div>
    </>
  );
}

export default Cart;