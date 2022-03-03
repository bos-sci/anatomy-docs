import { Link } from 'react-router-dom';
import { NavItemUtility } from './NavPrimary';

interface Props {
  utilityItems: NavItemUtility[];
}

const NavUtility = ({utilityItems}: Props): JSX.Element => {
  return (
    <nav className="nav-utility" aria-label="utility">
      <ul className="nav">
        {utilityItems.map((utilityItem, i) =>
          <li key={utilityItem.text + i} className="nav-item">
            {utilityItem.slug &&
              <Link to={utilityItem.slug} className="nav-link">{utilityItem.text}</Link>
            }
            {utilityItem.href &&
              <a href={utilityItem.href} className="nav-link">{utilityItem.text}</a>
            }
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavUtility;