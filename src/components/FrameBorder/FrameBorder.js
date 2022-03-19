import React from 'react';
import './FrameBorder.scss';
import PropTypes from 'prop-types';

const Button = ({ classlist, children } = props) => {
  return (
    <>
      <div className={`bordered ${classlist}`}>{children}</div>
    </>
  );
};

Button.defaultProps = {
  classlist: '',
};

Button.propTypes = {
  classlist: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
