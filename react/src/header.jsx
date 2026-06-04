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
          to="/products"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Orders
        </Link>

        <Link
          to="/Counter"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Counter
        </Link>

        <Link
          to="/Recipes"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          API Call
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
          to="/Website"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Static Website
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
        
        <Link
          to="/Users"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Users
        </Link>
        

        

      </div>

    </div>
  );
}

export default Header;