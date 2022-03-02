import Button from '../Button';
import IconChevronRight from '../icon/icons/IconChevronRight';
import { NavItemPrimary } from './NavPrimary';

interface Props {
  navItems: NavItemPrimary[];
  title: string;
  description: string;
}

const NavPrimaryMenu = ({ navItems, title, description }: Props): JSX.Element => {
  return (
    <div className="nav-primary-menu">
      <div className="nav-primary-menu-panels">
        <div className="nav-primary-panel nav-primary-menu-panel-custom">
          <h4>{ title }</h4>
          <p className="body-subtle">{ description }</p>
          <a href="#demo" className="body-subtle">All patients and caregivers information</a>
        </div>
        <div className="nav-primary-panel">
          <ul className="nav nav-primary-menu-panel">
            <li className="nav-item">
              <a href="#demo" className="nav-link">Nav item</a>
            </li>
            <li className="nav-item">
              <a href="#demo" className="nav-link">Nav item</a>
            </li>
            <li className="nav-item-parent">
              <Button variant="subtle" className="nav-link active" id="listParent">Nav item parent <IconChevronRight className="ads-icon-lg"/></Button>
            </li>
            <li className="nav-item">
              <a href="#demo" className="nav-link">Nav item</a>
            </li>
          </ul>
        </div>
        <div className="nav-primary-panel">
          <ul className="nav nav-primary-menu-panel" aria-labelledby="listParent">
            <li className="nav-item-parent">
              <Button variant="subtle" className="nav-link active" id="listParent2">Nav item parent <IconChevronRight className="ads-icon-lg"/></Button>
            </li>
            <li className="nav-item">
              <a href="#demo" className="nav-link">Nested nav item</a>
            </li>
            <li className="nav-item">
              <a href="#demo" className="nav-link">Nested nav item</a>
            </li>
          </ul>
        </div>
        <div className="nav-primary-panel">
          <ul className="nav nav-primary-menu-panel" aria-labelledby="listParent2">
            <li className="nav-item">
              <a href="#demo" className="nav-link">Nested nav item</a>
            </li>
            <li className="nav-item">
              <a href="#demo" className="nav-link">Nested nav item</a>
            </li>
            <li className="nav-item">
              <a href="#demo" className="nav-link">Nested nav item</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavPrimaryMenu;