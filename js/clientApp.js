import React from 'react';
import {render} from 'react-dom';
import MyTitle from './Title';

const MyFirstComponent = () => {
  return (
    <div>
      <MyTitle title="Props are great!" color="rebeccapurple" />
      <MyTitle title="Use props everywhere!" color="mediumaquamarine" />
      <MyTitle title="Props are the best!" color="peru" />
    </div>
  );
};

render(React.createElement(MyFirstComponent), document.getElementById('app'));
