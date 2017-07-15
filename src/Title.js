import React from 'react';
import PropTypes from 'prop-types';

const Title = ({title, color}) => {
  const style = {color};
  return (
    <div>
      <h1 style={style}>
        {title}
      </h1>
    </div>
  );
};

Title.PropTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Title;
