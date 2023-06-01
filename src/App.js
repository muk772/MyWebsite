import "./App.css";
import Header from "./Header";

import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Provider } from "react-redux";
import store from "../src/Utils/Store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </div>
  );
}

export default App;
