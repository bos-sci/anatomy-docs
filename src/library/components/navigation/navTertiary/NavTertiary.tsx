import { Link } from "react-router-dom";
import "./NavTertiary.scss"

export interface NavItemTertiary {
  id: string;
  text: string;
}

interface Props {
  depth?: number;
  navTertiaryItems?: NavItemTertiary[];
}

const NavTertiary = ({ navTertiaryItems }: Props): JSX.Element => {
  return (
    <nav className="nav-tertiary" aria-label="Table of contents">
      <h2 className="nav-tertiary-title" aria-hidden="true">
        On this page
      </h2>
      <ul className="nav">
        {navTertiaryItems && Array.from(navTertiaryItems).map((navItem, i) => {
          return (
            <li key={`tertiaryNavItem${i}`} className="nav-item">
              <Link 
                to={{hash: navItem.id}} 
                className="nav-link">
                {navItem.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

export default NavTertiary;