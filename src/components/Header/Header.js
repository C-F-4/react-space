import React from 'react';
import './Header.scss';
import PropTypes from 'prop-types';

const Header = ({ title, classlist, children } = props) => {
  return (
    <header className={`cx-head ${classlist}`}>
      <h1 className="text">{title}</h1>
      {children}
    </header>
  );
};

Header.defaultProps = {
  classlist: '',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  classlist: PropTypes.string,
  children: PropTypes.node,
};

// CSS in js
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// };

export default Header;
