import { ReactNode } from 'react';
import Markdown from '../Markdown';
import NavSecondary, { NavItemSecondary } from '../navSecondary/NavSecondary';
import NewNav, { NavItemSecondary as newNavItems } from '../newNavSecondary/NavSecondary';
import NavTertiary, { NavItemTertiary } from '../navTertiary/NavTertiary';

interface Props {
  name: string;
  lastUpdated: string;
  leadParagraph: string;
  navSecondaryItems?: NavItemSecondary[];
  newNavSecondaryItems?: newNavItems[];
  navSecondarySlug?: string;
  navTertiaryItems: NavItemTertiary[];
  children: ReactNode;
}

const PageTemplate = (props: Props) => {
  return (
    <div className="app-body">
    { props.newNavSecondaryItems && <NewNav navItems={props.newNavSecondaryItems} currentSlug={props.navSecondarySlug} /> }
    { props.navSecondaryItems && <NavSecondary navItems={ props.navSecondaryItems } /> }
      <main id="mainContent">
        <div className="page-header">
          <div className="metadata">
            <h1 className="title">{ props.name }</h1>
            <dl className="datestamp">
              <dt>Last Updated:</dt>
              <dd>{ props.lastUpdated ? new Date(props.lastUpdated).toLocaleDateString() : 'Draft' }</dd>
            </dl>
          </div>
          <Markdown markdown={ props.leadParagraph } className="body-assertive" />
        </div>
        <NavTertiary navTertiaryItems={ props.navTertiaryItems } />
        <div className="page-content">
          { props.children }
        </div>
      </main>
    </div>
  );
}

export default PageTemplate;