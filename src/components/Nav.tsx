import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
/**这里使用 require 代替 import 是因为
 * TreeShaking 不适用于 require 
 * 可以避免使用 console.log(x);
 **/
require('icons/records.svg');
require('icons/chart.svg');
require('icons/bookkeeping.svg');

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
          <svg className="icon">
            <use xlinkHref="#records" />
          </svg>
          <Link to="/records">Records</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#bookkeeping" />
          </svg>
          <Link to="/money">Money</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#chart" />
          </svg>
          <Link to="/stats">Stats</Link>
        </li>
      </ul>
    </NavBox>
  );
};

export default Nav;