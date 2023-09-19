import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Provider from "./Context/Provider";
import ModalProvider from "./Context/ModalProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider><ModalProvider><App /></ModalProvider></Provider>);
