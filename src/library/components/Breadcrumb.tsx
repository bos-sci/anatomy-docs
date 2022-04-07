// TODO:
// remove hardcoded english aria-label
// add warning/error for href="#"

import { useEffect, useState } from 'react';
import { RequireOnlyOne } from '../types';
import Dropdown from './Dropdown';
import Link from './Link';

interface CrumbBase {
  name: string;
  href?: string;
  to?: string;
}

export type Crumb = RequireOnlyOne<CrumbBase, 'href' | 'to'>;

interface Props {
  crumbs: Crumb[];
  currentPage: string;
  hasOverflow?: boolean;
}

const Breadcrumb = ({ crumbs, currentPage, hasOverflow = true }: Props): JSX.Element => {

  const [overflowCrumbs, setOverflowCrumbs] = useState<Crumb[]>([]);
  const [visibleCrumbs, setVisibleCrumbs] = useState<Crumb[]>([]);

  useEffect(() => {
    if (crumbs) {
      if (hasOverflow) {
        setVisibleCrumbs(crumbs.slice(-1));
        setOverflowCrumbs(crumbs.slice(0, -1));
      } else {
        setVisibleCrumbs(crumbs);
        setOverflowCrumbs([]);
      }
    }
  }, [crumbs, hasOverflow]);

  return (
    <nav aria-label="breadcrumb">
      <ol className="ads-breadcrumbs">
        {overflowCrumbs.length > 0 &&
          <li className="ads-breadcrumb-overflow">
            {overflowCrumbs.length > 0 &&
              <Dropdown variant="subtle" icon="ellipsis" aria-label="toggle breadcrumb menu">
                {overflowCrumbs.map(crumb => (
                  <Link key={`crumb${crumb.name}`} href={crumb.href} to={crumb.to}>{crumb.name}</Link>
                ))}
              </Dropdown>
            }
          </li>
        }
        {visibleCrumbs.map(crumb => (
          <li key={`crumb${crumb.name}`} className="ads-breadcrumb-item">
            <Link href={crumb.href} to={crumb.to} className="ads-breadcrumb-link">{crumb.name} </Link>
          </li>
        ))}
        <li className="ads-breadcrumb-item ads-breadcrumb-item-active" aria-current="page">{currentPage}</li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;