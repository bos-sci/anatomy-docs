import { NavLink } from "react-router-dom"
import "./NavSecondary.scss"

const NavSecondary = ({ navItems }) => {
  return (
    <nav className="nav-secondary">
      <ul className="nav">
      {navItems.map((navItem, i) => {
        return (
          <li key={`secondaryNavItem${i}`} className="nav-item">
            <NavLink
              to={navItem.slug}
              className="nav-link"
              activeClassName="active"
            >
              {navItem.text}
            </NavLink>
          </li>
        )
      })}
      </ul>
    </nav>
  )
}

export default NavSecondary
