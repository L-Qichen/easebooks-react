import React from 'react';
import styled from 'styled-components';
//import styled from 'styled-components';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const ContentBox = styled.div`
flex-grow: 1;
overflow: auto;
`

const Nav = styled.div`
  border: 1px solid green;
  > ul {
    display: flex;
    >li {
      width: 33.3333333%;
      text-align: center;
      padding: 16px;
    }
  }
`

function App() {
  return (
    <Router>
      <Wrapper>
        <ContentBox>
          <Routes>
            <Route path="/records" element={<Records />} />
            <Route path="/money" element={<Money />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/" element={<Navigate replace to="/money" />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </ContentBox>

        <Nav>
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
        </Nav>
      </Wrapper>
    </Router>
  );
}

function Records() {
  return <h2>Records page</h2>;
}

function Money() {
  return <h2>Money page</h2>;
}

function Stats() {
  return <h2>Stats page</h2>;
}

function NoMatch() {
  return <h2>404 page</h2>
}

export default App;
