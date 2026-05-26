import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (

    <div
      style={{
        backgroundColor: "#131921",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >

      <h2
        style={{
          margin: 0,
          color: "#FF9900"
        }}
      >
        Amazon
      </h2>

      <input
        type="text"
        placeholder="Search products..."
        style={{
          width: "50%",
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          outline: "none"
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "20px",
          fontSize: "18px"
        }}
      >

        <Link
          to="/Home"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Home
        </Link>

        <Link
          to="/orders"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Orders
        </Link>

        <Link
          to="/cart"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Cart 🛒
        </Link>

        <Link
          to="/Register"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Register
        </Link>

      </div>

    </div>
  );
}

export default Header;