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
    <nav className="bsds-nav-tertiary" aria-label="Table of contents">
      <h2 className="bsds-nav-tertiary-title" aria-hidden="true">
        On this page
      </h2>
      <ul className="bsds-nav">
        {navTertiaryItems && Array.from(navTertiaryItems).map((navItem, i) => {
          return (
            <li key={`tertiaryNavItem${i}`} className="bsds-nav-item">
              <Link
                to={{hash: navItem.id}}
                className="bsds-nav-link">
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