import React from 'react';
import styled from 'styled-components';
//import styled from 'styled-components';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Nav from 'components/Nav';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentBox = styled.div`
flex-grow: 1;
overflow: auto;
`;

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

        <Nav />

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
