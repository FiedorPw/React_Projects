import React, { useState } from "react";

export default function Form({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <button
        type="submit"
        style={{
          marginLeft: "10px",
          padding: "8px 16px",
          borderRadius: "4px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
        }}
      >
        Submit
      </button>
    </form>
  );
}
