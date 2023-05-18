import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";


function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
