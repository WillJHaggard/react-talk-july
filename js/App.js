import React from 'react';
import {render} from 'react-dom';
import Title from './Title';

const App = () => (
  <div>
    <Title title="Props are great!" color="rebeccapurple" />
    <Title title="Use props everywhere!" color="mediumaquamarine" />
    <Title title="Props are the best!" color="peru" />
  </div>
);

render(<App />, document.getElementById('app'));
