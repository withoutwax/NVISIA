import React, { Component } from 'react';
import './Header.css';
import NVISIA from '../assets/symbols/logo01.png'

class Header extends Component {
  render() {
    return (
      <navbar className="header-nav">
        <img className="nvisia-logo" src={NVISIA} alt="NVISIA-logo"/>
        <a>ABOUT</a>
        <a>WORK</a>
        <a>SERVICES</a>
        <a>BLOG</a>
        <a>EVENTS</a>
        <a>CAREERS</a>
        <a className="margin-right-50">CONTACT US</a>
      </navbar>
    );
  }
}

export default Header;
