import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home"
import Shirts from "./pages/shirts"
import Headwear from "./pages/headwear";
import Gallery from "./pages/gallery";
import ProductDetail from "./products/product-detail";



export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
        <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/shirts" component={Shirts} />
              <Route path="/headwear" component={Headwear} />
              <Route path="/headwear/:slug" component={ProductDetail} />
              <Route path="/shirts/:slug" component={ProductDetail} />
            </Switch>
</div>
        </Router>

      
      </div>
    );
  }
}
