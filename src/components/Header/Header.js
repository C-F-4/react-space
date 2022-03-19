import React from 'react';
import './Header.scss';
import PropTypes from 'prop-types';

const Header = ({ title, classlist } = props) => {
  return (
    <header class={classlist}>
      <h1>{title}</h1>
    </header>
  );
};

// Header.defaultProps = {
//   title: 'Default Header in Use',
// };

Header.propTypes = {
  title: PropTypes.string.isRequired,
  classlist: PropTypes.string,
};

// CSS in js
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// };

export default Header;
