import React from 'react';
import styled from 'emotion/react';
import Title from './components/Title';

const AppBody = styled('div')`
  margin: 0;
  padding: 0;
  font-size: 16px;
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(/public/img/3.jpg);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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

export default App;
