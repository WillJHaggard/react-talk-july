var MyTitle = function() {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Check out this component!')
  );
};

var MyFirstComponent = function() {
  return React.createElement(
    'div',
    null,
    React.createElement(MyTitle, null),
    React.createElement(MyTitle, null),
    React.createElement(MyTitle, null)
  );
};

ReactDOM.render(
  React.createElement(MyFirstComponent),
  document.getElementById('app')
);
