import { ReactNode } from 'react';
import Markdown from '../Markdown';
import NavSecondary, { NavItemSecondary } from '../../../../library/components/navSecondary/NavSecondary';
import NavTertiary, { NavItemTertiary } from '../navTertiary/NavTertiary';

interface Props {
  name: string;
  lastUpdated: string;
  leadParagraph: string;
  navSecondaryItems?: NavItemSecondary[];
  navSecondaryActiveSlug?: string;
  navSecondaryMenuTrigger?: string;
  navTertiaryItems: NavItemTertiary[];
  children: ReactNode;
}

const PageTemplate = (props: Props) => {
  return (
    <div className="app-body">
    { (props.navSecondaryItems && props.navSecondaryMenuTrigger) &&
      <NavSecondary
        menuTriggerText={props.navSecondaryMenuTrigger}
        navItems={props.navSecondaryItems}
        activeSlug={props.navSecondaryActiveSlug} />
    }
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