import { RefObject, useEffect, useRef } from 'react';
import Link from 'library/components/Link';
import { NavNode } from './NavPrimary';

interface Props {
  navItem: NavNode;
  setActiveNode: (node: NavNode) => void;
  isActiveNode: (node: NavNode, ref: RefObject<HTMLAnchorElement>) => boolean;
}

const NavPrimaryLeaf = (props: Props) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (props.isActiveNode(props.navItem, linkRef)) {
      props.setActiveNode(props.navItem);
    }
  }, [props]);

  return (
    <li className="bsds-nav-item">
      <Link ref={linkRef} href={props.navItem.text} to={props.navItem.to} className="bsds-nav-link" isNavLink>
        {props.navItem.text}
      </Link>
    </li>
  );
};

export default NavPrimaryLeaf;
