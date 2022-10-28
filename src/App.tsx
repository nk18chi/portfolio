import React from "react";
import "./index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import TopPage from "./components/TopPage/TopPage";

function App() {
  return (
    <>
      <div className='container'>
        <Router>
          <SideBar />
          <Switch>
            <Route exact path='/' component={TopPage} />
            <Route exact path='/portfolio' component={TopPage} />
          </Switch>
        </Router>
      </div>
      <footer>2020 © Naoki Mita. All Rights Reserved.</footer>
    </>
  );
}

export default App;
