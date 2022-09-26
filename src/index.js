import React from "react";
import ReactDOM from "react-dom/client";

import { createGlobalStyle } from "styled-components";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

import reportWebVitals from "./reportWebVitals";

// global styles for the entire app
const IndexStyle = createGlobalStyle`
    body {
    background: linear-gradient(0deg, #F6F2FF, #F6F2FF), #FBFAFF;;
    margin: 0;
    font-family: -apple-system, 'Helvetica Neue';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    code {
    font-family:  -apple-system, 'Helvetica Neue';
    }
    `;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IndexStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
