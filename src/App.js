import React from 'react';
import {render} from 'react-dom';
import styled from 'emotion/react';
import Title from './components/Title';

const AppBody = styled('div')`
  margin: 0;
  padding: 0;
  font-size: 16px;
`;

const App = () => (
  <AppBody>
    <div>
      <Title>Video App</Title>
      <input type="text" placeholder="Search" />
      <a>or Browse All</a>
    </div>
  </AppBody>
);

render(<App />, document.getElementById('app'));
