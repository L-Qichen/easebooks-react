import styled from "styled-components";
import React from "react";
import Icon from "./icon";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const NavBox = styled.div`
  background: white;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
    display: flex;
    >li {
      width: 33.3333333%;
      text-align: center;
      >a {
        padding: 6px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon {
          width: 24px;
          height: 24px;
        }
        &.selected {
          color: red;
          .icon {
            fill: red;
          }
        }
      }
    }
  }
`;

  return (
    <NavBox>
      <ul>
        <li>
          <NavLink to="/records" className={({ isActive }) =>
            isActive ? "selected" : ""}
          >
            <Icon name="records" />
            Records
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" className={({ isActive }) =>
            isActive ? "selected" : ""}
          >
            <Icon name="bookkeeping" />
            Money
          </NavLink>
        </li>
        <li>
          <NavLink to="/stats" className={({ isActive }) =>
            isActive ? "selected" : ""}
          >
            <Icon name="chart" />
            Stats
          </NavLink>
        </li>
      </ul>
    </NavBox >
  );
};

export default Nav;