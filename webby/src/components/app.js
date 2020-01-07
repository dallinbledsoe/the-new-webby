import React, { Component } from 'react';
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home"
import Shirts from "./pages/shirts"
import Headwear from "./pages/headwear";
import Gallery from "./pages/gallery"
import PortfolioDetail from "./portfolio/portfolio-detail"



export default class App extends Component {
  render() {
    return (
      <div className='app'>
          <h1>Dallin Bledsoe</h1>
        <div>
        {moment().format('MMMM Do YYYY, h:mm:ss a')}

        </div>
        <Router>
          <div>
        <NavigationContainer />
        

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/shirts" component={Shirts} />
              <Route path="/headwear" component={Headwear} />
              <Route path="/portfolio/:slug" component={PortfolioDetail} />
            </Switch>
</div>
        </Router>

      
      </div>
    );
  }
}
