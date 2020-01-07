import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'


export default class NavigationComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <div class="nav-bar">
        <div class="nav-links">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
          <NavLink to="/shirts" activeClassName="nav-link-active">
            Shirts
          </NavLink>
          <NavLink to="/headwear" activeClassName="nav-link-active">
            Headwear
          </NavLink>
          <NavLink to="/gallery" activeClassName="nav-link-active">
            Gallery
          </NavLink>
          

          {false ? <button>Add Blog</button> : null}
        </div>
      </div>
      </div>
    );
  }
}