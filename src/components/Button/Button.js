import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

const Button = ({ text, classlist } = props) => {
  return (
    <>
      <button className={('btn', classlist)}>{text}</button>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  classlist: PropTypes.string,
};

export default Button;
