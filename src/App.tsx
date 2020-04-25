import React from "react";
import "./index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import TopPage from "./components/TopPage/TopPage";
import PortfolioPage from "./components/PortfolioPage/PortfolioPage";

function App() {
  return (
    <>
      <div className='container'>
        <SideBar />
        <Router>
          <Switch>
            <Route exact path='/portfolio/p_:portfolio_id' component={PortfolioPage} />
            <Route exact path='/portfolio' component={TopPage} />
          </Switch>
        </Router>
      </div>
      <footer>2020 © Naoki Mita. All Rights Reserved.</footer>
    </>
  );
}

export default App;
