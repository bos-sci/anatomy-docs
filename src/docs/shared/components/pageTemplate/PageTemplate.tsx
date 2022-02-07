import { ReactNode } from 'react';
import Markdown from '../Markdown';
import NavSecondary, { NavItemSecondary } from '../navSecondary/NavSecondary';
import NavTertiary, { NavItemTertiary } from '../navTertiary/NavTertiary';

interface Props {
  name: string;
  lastUpdated: string;
  leadParagraph: string;
  navSecondaryItems: NavItemSecondary[];
  navTertiaryItems: NavItemTertiary[];
  children: ReactNode;
}

const PageTemplate = (props: Props) => {
  return (
    <div className="app-body">
      <div className="app-content">
        <NavSecondary navItems={ props.navSecondaryItems } />
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
    </div>
  );
}

export default PageTemplate;