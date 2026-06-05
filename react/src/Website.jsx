import React from "react";
import Header from "./header";

function WebsiteViewer() {
  const openWebsite = () => {
    window.open(
      "https://model-1-z9uk.onrender.com/Website/",
      "_blank"
    );
  };

  const openImageGallery = () => {
    window.open(
      "https://model-1-z9uk.onrender.com/Image/",
      "_blank"
    );
  };

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "50px auto",
      textAlign: "center",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },

    section: {
      background: "#fff",
      padding: "25px",
      marginBottom: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    },

    title: {
      color: "#333",
      marginBottom: "15px",
    },

    button: {
      background: "#4f46e5",
      color: "white",
      border: "none",
      padding: "10px 18px",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "14px",
      transition: "0.2s",
      marginTop: "10px",
    },

    page: {
      background: "#f4f6f8",
      minHeight: "100vh",
    },
  };

  return (
    <div style={styles.page}>
      <Header />

      <div style={styles.container}>
        <div style={styles.section}>
          <h2 style={styles.title}>Static Website</h2>
          <button
            style={styles.button}
            onClick={openWebsite}
            onMouseOver={(e) =>
              (e.target.style.background = "#3730a3")
            }
            onMouseOut={(e) =>
              (e.target.style.background = "#4f46e5")
            }
          >
            Open Website
          </button>
        </div>

        <div style={styles.section}>
          <h2 style={styles.title}>Image Gallery</h2>
          <button
            style={styles.button}
            onClick={openImageGallery}
            onMouseOver={(e) =>
              (e.target.style.background = "#3730a3")
            }
            onMouseOut={(e) =>
              (e.target.style.background = "#4f46e5")
            }
          >
            Open Image Gallery
          </button>
        </div>
      </div>
    </div>
  );
}

export default WebsiteViewer;