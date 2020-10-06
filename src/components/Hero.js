import React from "react";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>A new destination for electronics gadgets</h1>
        <p>Embrace your choices - we do</p>
        {children}
      </div>
    </div>
  );
}
