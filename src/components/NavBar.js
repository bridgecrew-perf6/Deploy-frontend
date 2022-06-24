import React from "react";
import {NavLink} from "react-router-dom"

function NavBar() {
    return (
    //   <div>
    //     <NavLink
    //       to="/"
    //       /* set exact so it knows to only set activeStyle when route is deeply equal to link */
    //       exact
    //       /* add styling to Navlink */
    //       style={linkStyles}
    //       /* add prop for activeStyle */
    //       activeStyle={{
    //         background: "darkblue",
    //       }}
    //     >
    //       Phase 1
    //     </NavLink>
    //     <NavLink
    //       to="/about"
    //       exact
    //       style={linkStyles}
    //       activeStyle={{
    //         background: "darkblue",
    //       }}
    //     >
    //       About
    //     </NavLink>
    //     <NavLink
    //       to="/login"
    //       exact
    //       style={linkStyles}
    //       activeStyle={{
    //         background: "darkblue",
    //       }}
    //     >
    //       Login
    //     </NavLink>
    //   </div>
    <div class="wrapper">
        <div class="multi_color_border"></div>
        <div class="top_nav">
        <div class="left">
          <div class="logo"><p><span>Flat</span>Yak</p></div>
      </div> 
      <div class="right">
        <ul>
          <li><a href="#">Phase 1</a></li>
          <li><a href="#">Phase 2</a></li>
          <li><a href="#">Phase 3</a></li>
          <li><a href="#">Phase 4</a></li>
          <li><a href="#">Phase 5</a></li>

        </ul>
      </div>
    </div>
    <div class="bottom_nav">
      <ul>
        <li><a href="#"> Most Popular </a></li>
        <li><a href="#"> Oldest </a></li>
        <li><a href="#"> Newest </a></li>
      </ul>
  </div>
</div>
    );
  }

export default NavBar;