import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
import Icon from "./icon";

const NavBox = styled.div`
line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
> ul {
  display: flex;
  >li {
    width: 33.3333333%;
    text-align: center;
    padding: 6px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      width: 24px;
      height: 24px;
    }
  }
}
`;

const Nav = () => {
  return (
    <NavBox>
      <ul>
        <li>
          <Icon name="records" />
          <Link to="/records">Records</Link>
        </li>
        <li>
          <Icon name="bookkeeping" />
          <Link to="/money">Money</Link>
        </li>
        <li>
          <Icon name="chart" />
          <Link to="/stats">Stats</Link>
        </li>
      </ul>
    </NavBox>
  );
};

export default Nav;