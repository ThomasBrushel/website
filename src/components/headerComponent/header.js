import React, { Component } from 'react';

import {
    Link
  } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="col-4">
            <div className="logo">
              <Link to="/">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1385789/eggys_logo-small.png" alt={"Logo"} />
              </Link>
            </div>
          </div>
          <div className="col-8 text-right">
          <input type="checkbox" id="nav-toggle" className="float-right"/>
          <label htmlFor="nav-toggle" className="navigation-button">
          ☰
          </label>
            <nav>
                <ul>
                    <li className="first">
                      <Link to="/">Home</Link>
                    </li>
                    
                    <li>
                      <Link to="/Menu">Menu</Link>
                    </li>
                    <li>
                      <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
