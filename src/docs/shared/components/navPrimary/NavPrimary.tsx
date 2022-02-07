// TODO: convert navbar-toggler to Button and icons to Icon components

import { useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../../../../assets/images/logo-anatomy.svg";

const NavPrimary = (): JSX.Element => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="navbar navbar-expand-lg">
      <div className="container-fluid container-lg p-0">
        <img src={logo} className="navbar-brand" alt="Anatomy Design System"/>
        <button
          type="button"
          className={`navbar-toggler ${ !isNavOpen ? 'collapsed' : '' }`}
          data-bs-toggle="collapse"
          data-bs-target="#navPrimary"
          aria-controls="navPrimary"
          aria-expanded={isNavOpen}
          aria-label="Toggle mega navigation"
          onClick={() => setIsNavOpen(wasOpen => !wasOpen)}
        >
          <span aria-hidden="true" className="navbar-toggler-wrapper navbar-toggle-open-menu">
            Menu
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="navbar-toggler-icon u-icon-right">
              <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
            </svg>
          </span>
          <span aria-hidden="true" className="navbar-toggler-wrapper navbar-toggle-close-menu">
            Close
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" className="navbar-toggler-icon u-icon-right">
              <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
            </svg>
          </span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${isNavOpen ? 'show' : ''}`} id="navPrimary">
          <nav className="navbar-nav-primary" aria-label="primary">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink exact to='/' className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/content' className="nav-link">
                  Content
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/foundations' className="nav-link">
                  Foundations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/components' className="nav-link">
                  Components
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/resources/developers/code-standards' className="nav-link">
                  Code standards
                </NavLink>
              </li>
              <li className="nav-item">
                {/* TODO: Remove isActive function once code standards has moved under dev resources */}
                <NavLink to='/resources' className={isActive => 'nav-link ' + (isActive ? 'active' : '')} isActive={
                  (match, location) => match! && !location.pathname.startsWith('/resources/developers/code-standards/')
                }>
                  Resources
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default NavPrimary;
