import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Records from 'views/Records';
import Money from 'views/Money';
import Stats from 'views/Stats';
import NoMatch from 'views/NoMatch';
import styled from 'styled-components';
import Tags from 'views/Tags';
import Edit from 'views/Edit';

function App() {
  const AppWrapper = styled.div`
    color: #333;
  `

  return (
    <AppWrapper>
      <Router>
        <Routes>
          <Route path="/records" element={<Records />} />
          <Route path="/money" element={<Money />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/tags/:id" element={<Edit value={''} onChange={function (value: string): void {
            throw new Error('Function not implemented.');
          }} />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/" element={<Navigate replace to="/money" />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </AppWrapper>
  );
}

export default App;
