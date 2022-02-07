import { NavLink } from "react-router-dom"
import "./NavSecondary.scss"

export interface NavItemSecondary {
  slug: string;
  text: string;
}

interface Props {
  navItems: NavItemSecondary[];
}

const NavSecondary = ({ navItems }: Props): JSX.Element => {
  return (
    <nav className="nav-secondary" aria-label="secondary">
      <ul className="nav">
      {navItems.map((navItem, i) => {
        return (
          <li key={`secondaryNavItem${i}`} className="nav-item">
            <NavLink
              to={navItem.slug}
              className="nav-link"
            >
              {navItem.text}
            </NavLink>
          </li>
        )
      })}
      </ul>
    </nav>
  );
}

export default NavSecondary;
