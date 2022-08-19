import React, { useRef } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams
} from "react-router-dom";
import Records from 'views/Records';
import Money from 'views/Money';
import Stats from 'views/Stats';
import NoMatch from 'views/NoMatch';
import styled from 'styled-components';
import Tags from 'views/Tags';
import Edit from 'views/Edit';
import { useTags } from 'hooks/useTags';

function App() {
  const AppWrapper = styled.div`
    color: #333;
  `

  type Params = {
    id: string;
  }

  const { findTag, updateTag } = useTags();
  let { id: idString } = useParams<Params>();
  let tag = findTag(parseInt(idString || ''));
  const refInput = useRef<HTMLInputElement>(null);
  const onChange = () => {
    if (refInput.current !== null) {
      updateTag(tag.id, { name: refInput.current.value });
      console.log(tag);
    };
  };
  return (
    <AppWrapper>
      <Router>
        <Routes>
          <Route path="/records" element={<Records />} />
          <Route path="/money" element={<Money />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/tags/:id" element={<Edit value='' onChange={() => { onChange() }} />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/" element={<Navigate replace to="/money" />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </AppWrapper>
  );
}

export default App;
