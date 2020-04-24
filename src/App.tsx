import React from "react";
import "./index.scss";
import SideBar from "./components/SideBar";
import MainColumn from "./components/MainColumn";

function App() {
  return (
    <div className='container'>
      <SideBar />
      <MainColumn />
    </div>
  );
}

export default App;
