import { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Link from '../../Link';
import { NavNode } from './NavPrimary';

interface Props {
  navItem: NavNode;
  setActiveNode: (node: NavNode) => void;
}

const NavPrimaryLeaf = (props: Props) => {
  const isMatch = useRouteMatch(props.navItem.slug ? props.navItem.slug : props.navItem.href || '');

  useEffect(() => {
    if (isMatch) {
      props.setActiveNode(props.navItem);
    }
  }, [isMatch, props]);

  return (
    <li className="nav-item">
      <Link href={props.navItem.href} to={props.navItem.slug} className="nav-link" isNavLink={true}>{props.navItem.text}</Link>
    </li>
  );
}

export default NavPrimaryLeaf;