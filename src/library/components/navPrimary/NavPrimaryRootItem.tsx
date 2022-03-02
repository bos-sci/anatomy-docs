import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
import IconChevronDown from '../icon/icons/IconChevronDown';
import IconChevronUp from '../icon/icons/IconChevronUp';
import { NavItemPrimary } from './NavPrimary';

interface Props {
  navItem: NavItemPrimary;
  updateMenu: (navItem: NavItemPrimary | null) => void;
}

const NavPrimaryRootItem = ({ navItem, updateMenu }: Props): JSX.Element => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    updateMenu(!isOpen ? navItem : null);
    setIsOpen(!isOpen);
  }

  return (
    <li className="nav-item nav-primary-root-item">
      {navItem.children &&
        <Button
          type="button"
          variant="subtle"
          className={'nav-link' + (isOpen ? ' active' : '')}
          onClick={handleClick}>
          {navItem.text}
          {isOpen ? <IconChevronUp className="ads-icon-lg u-icon-right" /> : <IconChevronDown className="ads-icon-lg u-icon-right" />}
        </Button>
      }
      {navItem.slug &&
        <NavLink to={navItem.slug} className="nav-link">{navItem.text}</NavLink>
      }
      {navItem.href &&
        <a href={navItem.href} className="nav-link">{navItem.text}</a>
      }
    </li>
  );
}

export default NavPrimaryRootItem;