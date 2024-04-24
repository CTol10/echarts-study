import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import ChartView from "../views/chats";
const routeList = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/chats" replace />,
  },
  {
    path: "/chats",
    element: <ChartView />,
  },
]);

export default routeList;
