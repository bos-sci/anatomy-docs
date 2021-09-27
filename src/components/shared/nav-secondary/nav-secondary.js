import * as React from "react"
import { Link } from "gatsby"
import "./nav-secondary.scss"

const NavSecondary = ({ navItems }) => {
  return (
    <nav className="nav-secondary">
      <ul className="nav">
      {navItems.map((navItem, i) => {
        return (
          <li key={`secondaryNavItem${i}`} className="nav-item">
            <Link
              to={navItem.slug}
              className="nav-link"
              activeClassName="active"
            >
                {navItem.text}</Link>
          </li>
        )
      })}
      </ul>
    </nav>
  )
}

export default NavSecondary
