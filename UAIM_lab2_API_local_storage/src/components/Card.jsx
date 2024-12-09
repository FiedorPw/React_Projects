import React from "react";

export default function Card({ title, content }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
