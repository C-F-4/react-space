import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

const Button = ({ text, classlist, onClick } = props) => {
  return (
    <>
      <button className={`btn ${classlist}`} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

Button.defaultProps = {
  classlist: '',
};

Button.propTypes = {
  text: PropTypes.string.isRequired || PropTypes.node.isRequired,
  classlist: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
