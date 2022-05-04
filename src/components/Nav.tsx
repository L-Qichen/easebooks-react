import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

const NavBox = styled.div`
line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
> ul {
  display: flex;
  >li {
    width: 33.3333333%;
    text-align: center;
    padding: 16px;
  }
}
`;

const Nav = () => {
  return (
    <NavBox>
      <ul>
        <li>
          <Link to="/records">Records</Link>
        </li>
        <li>
          <Link to="/money">Money</Link>
        </li>
        <li>
          <Link to="/stats">Stats</Link>
        </li>
      </ul>
    </NavBox>
  );
};

export default Nav;