import React from "react";
import "./index.scss";
import SideBar from "./components/SideBar/SideBar";
import MainColumn from "./components/TopPage/MainColumn";

function App() {
  return (
    <>
      <div className='container'>
        <SideBar />
        <MainColumn />
      </div>
      <footer>2020 © Naoki Mita. All Rights Reserved.</footer>
    </>
  );
}

export default App;
