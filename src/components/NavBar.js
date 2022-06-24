import React from "react";
// import {NavLink} from "react-router-dom"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function NavBar() {
    return (
    <div class="wrapper">
        <div class="multi_color_border"></div>
        <div class="top_nav">
        <div class="left">
          <div class="logo"><p><span>Flat</span>Yak</p></div>
      </div> 
      <div class="right">
        <ul>
          <li><Link
              to={{
              pathname: "/Phase1",
              state: {id: 1},
              }}>
              Phase 1
           </Link></li>
           <li><Link
              to={{
              pathname: "/Phase2",
              state: {id: 2},
              }}>
              Phase 2
           </Link></li>
           <li> <Link
              to={{
              pathname: "/Phase3",
              state: {id: 3},
              }}>
              Phase 3
           </Link></li>
           <li><Link
              to={{
              pathname: "/Phase4",
              state: {id: 4},
              }}>
              Phase 4
           </Link></li>
           <li><Link
              to={{
              pathname: "/Phase5",
              state: {id: 5},
              }}>
              Phase 5
           </Link></li>
        </ul>
      </div>
    </div>
    {/* <div class="bottom_nav">
      <ul>
        <li><a href="#"> Most Popular </a></li>
        <li><a href="#"> Oldest </a></li>
        <li><a href="#"> Newest </a></li>
      </ul>
  </div> */}
</div>
    );
  }

export default NavBar;














