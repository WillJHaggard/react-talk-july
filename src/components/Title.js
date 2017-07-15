import React from 'react';
import styled from 'emotion/react';
import PropTypes from 'prop-types';

const H1 = styled('h1')`
  font-size: 3.5rem;
  letter-spacing: 1px;
`;

const Title = ({title, color}) => {
  const style = {color};
  return (
    <div>
      <H1 style={style}>
        {title}
      </H1>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.children,
  color: PropTypes.string,
};

Title.defaultProps = {
  title: 'Video App',
  color: '#1a1a1a',
};

export default Title;
