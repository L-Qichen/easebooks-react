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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/records" element={<Records />} />
        <Route path="/money" element={<Money />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/" element={<Navigate replace to="/money" />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
