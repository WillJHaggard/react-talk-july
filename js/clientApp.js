import React from 'react';
import {render} from 'react-dom';

function MyFirstComponent() {
  return React.createElement(
    'div',
    null,
    React.createElement(MyTitle, null),
    React.createElement(MyTitle, null),
    React.createElement(MyTitle, null)
  );
}

render(React.createElement(MyFirstComponent), document.getElementById('app'));
