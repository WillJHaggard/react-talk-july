import React from 'react';
import styled from 'emotion/react';
import PropTypes from 'prop-types';

const H1 = styled('h1')`
  font-size: 3.5rem;
  letter-spacing: 1px;
`;

const Title = ({children, color}) => {
  const style = {color};
  return (
    <div>
      <H1 style={style}>
        {children}
      </H1>
    </div>
  );
};

Title.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
  color: PropTypes.string,
};

Title.defaultProps = {
  children: 'Video App',
  color: '#1a1a1a',
};

export default Title;
