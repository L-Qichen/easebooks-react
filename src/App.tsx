import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: red;
  width: 40px;
`

function App() {
  return (
    <div className="App">
      Hello
      <Button>test</Button>
    </div>
  );
}

export default App;
