import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "../src/components/baseEcharts/config";
import "./App.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
