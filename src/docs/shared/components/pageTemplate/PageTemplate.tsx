import { ReactNode } from 'react';
import Markdown from '../Markdown';
import NewNav, { NavItemSecondary } from '../../../../library/components/navSecondary/NavSecondary';
import NavTertiary, { NavItemTertiary } from '../navTertiary/NavTertiary';

interface Props {
  name: string;
  lastUpdated: string;
  leadParagraph: string;
  navSecondaryItems?: NavItemSecondary[];
  navSecondarySlug?: string;
  navTertiaryItems: NavItemTertiary[];
  children: ReactNode;
}

const PageTemplate = (props: Props) => {
  return (
    <div className="app-body">
    { props.navSecondaryItems && <NewNav navItems={props.navSecondaryItems} currentSlug={props.navSecondarySlug} /> }
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