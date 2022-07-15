import { useEffect } from 'react';
import { useHref, useLocation, useMatch } from 'react-router-dom';
import Link from '../../Link';
import { NavNode } from './NavPrimary';

interface Props {
  navItem: NavNode;
  setActiveNode: (node: NavNode) => void;
}

const NavPrimaryLeaf = (props: Props) => {
  const matchLink = useHref(props.navItem.slug ? props.navItem.slug : props.navItem.href || '');
  const isMatch = useMatch(matchLink);

  useEffect(() => {
    if (isMatch) {
      props.setActiveNode(props.navItem);
    }
  }, [isMatch, props]);

  return (
    <li className="ads-nav-item">
      <Link href={props.navItem.href} to={props.navItem.slug} className={`ads-nav-link`} isNavLink={true}>{props.navItem.text}{matchLink+' '}</Link>
    </li>
  );
}

export default NavPrimaryLeaf;