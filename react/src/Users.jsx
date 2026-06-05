import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./header";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://model-1-z9uk.onrender.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const styles = {
    container: {
      padding: "30px",
      fontFamily: "Arial, sans-serif",
      background: "#f4f6f8",
      minHeight: "100vh",
    },
    title: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#333",
    },
    card: {
      maxWidth: "900px",
      margin: "auto",
      background: "#fff",
      borderRadius: "10px",
      padding: "15px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    thead: {
      background: "#4f46e5",
      color: "white",
    },
    th: {
      padding: "12px",
      textAlign: "left",
      borderBottom: "1px solid #eee",
    },
    td: {
      padding: "12px",
      borderBottom: "1px solid #eee",
    },
    rowHover: {
      cursor: "pointer",
    },
    empty: {
      textAlign: "center",
      padding: "20px",
      color: "gray",
    },
    id: {
      fontSize: "12px",
      color: "#666",
    },
  };

  return (
    <>
      <Header />

      <div style={styles.container}>
        <h2 style={styles.title}>User List</h2>

        <div style={styles.card}>
          <table style={styles.table}>
            <thead style={styles.thead}>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
              </tr>
            </thead>

            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id} style={styles.rowHover}>
                    <td style={{ ...styles.td, ...styles.id }}>{user._id}</td>
                    <td style={styles.td}>{user.name}</td>
                    <td style={styles.td}>{user.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" style={styles.empty}>
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Users;