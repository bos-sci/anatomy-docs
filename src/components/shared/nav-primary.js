import * as React from "react"
import { Link } from "gatsby"
import logo from "../../assets/images/logo-bsc-anatomy.svg";

const NavPrimary = ({ isRootPath }) => {
  return (
    <header className="navbar navbar-expand-lg">
      <div className="container-fluid container-lg p-0">
        <img src={logo} className="navbar-brand" alt="Boston Scientific Design System"/>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navPrimary"
          aria-controls="navPrimary"
          aria-expanded="false"
          aria-label="Toggle mega navigation"
        >
          <span aria-hidden="true" className="navbar-toggler-wrapper navbar-toggle-open-menu">
            Menu
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="navbar-toggler-icon">
              <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
            </svg>
          </span>
          <span aria-hidden="true" className="navbar-toggler-wrapper navbar-toggle-close-menu">
            Close
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" className="navbar-toggler-icon">
              <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
            </svg>
          </span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navPrimary">
          <nav className="navbar-nav-primary" aria-label="primary">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/components/breadcrumbs/' className="nav-link" activeClassName="active">
                  Components
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/code-standards/general/' className="nav-link" activeClassName="active">
                  Code Standards
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default NavPrimary
