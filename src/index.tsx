/**

Entry point for the React application.
This script creates a root element in the DOM and renders the React application wrapped with a BrowserRouter component
which enables the use of React Router for client-side routing.
*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { App } from "./components/App";

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Render the React application wrapped with a BrowserRouter component
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
