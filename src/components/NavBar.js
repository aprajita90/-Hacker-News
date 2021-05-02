import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
  
function Navbar ()  {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <h1>Hacker News:</h1>
          <NavLink to='/TopStories' activeStyle>
           <h3>TopStories</h3>
          </NavLink>
          <NavLink to='/LatestStories' activeStyle>
           <h3>| LatestStories</h3>
          </NavLink>
          <NavLink to='/BestStories' activeStyle>
           <h3>| BestStories</h3>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;