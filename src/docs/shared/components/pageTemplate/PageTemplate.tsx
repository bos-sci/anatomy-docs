import { ReactNode } from 'react';
import Markdown from '../Markdown';
import NavSecondary, { NavItemSecondary } from '../navSecondary/NavSecondary';
import NavTertiary, { NavItemTertiary } from '../navTertiary/NavTertiary';
import './PageTemplate.scss';

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
        <main>
          <div className="page-headline">
            <div className="page-metadata">
              <h1 className="page-title">{ props.name }</h1>
              <dl className="page-publish-date body-subtle">
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