import React, { useState, useEffect, useRef } from "react";
import productApi from "./api/productApi";
import "./App.css";

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = { tenant_name: "dli" };
        const response = await productApi.getAll(params);
        console.log(response);
      } catch (error) {
        alert("failed to fetch product");
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1>
        <br />
        Open inspect to see the request run!
      </h1>
    </div>
  );
}

export default App;
