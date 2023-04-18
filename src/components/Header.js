import React from 'react';
import logo from '../image/logo.png'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img className="ultracar-logo-img" src={ logo } alt='logo da empresa ultracar'/>
      </div>
    );
  }
}

export default Header;