import { createContext, FormEvent, ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import algoliasearch from 'algoliasearch';
import SkipLink from 'library/components/SkipLink';
import logoADS from 'docs/assets/images/logo-anatomy.svg';
import logoBSC from 'docs/assets/images/logo-bsc.svg';
import NavPrimary, { NavItemPrimary } from 'library/components/navigation/navPrimary/NavPrimary';
import { SearchResult } from 'library/components/Search';
import { useNavigate } from 'react-router-dom';
import { indexSearch } from 'docs/shared/helpers';
import useHeadingIds from 'docs/shared/hooks/useHeadingIds';
import CarbonBadge from 'docs/shared/components/CarbonBadge';

interface Props {
  children: ReactNode;
}

const navItems: NavItemPrimary[] = [
  {
    text: 'Home',
    to: '/',
    isExactMatch: true
  },
  {
    text: 'Content',
    to: '/content',
    isActive: (location) => {
      return location.pathname.split('/')[1] === 'content';
    }
  },
  {
    text: 'Foundations',
    to: '/foundations',
    isActive: (location) => {
      return location.pathname.split('/')[1] === 'foundations';
    }
  },
  {
    text: 'Components',
    to: '/components',
    isActive: (location) => {
      return location.pathname.split('/')[1] === 'components';
    }
  },
  {
    text: 'Code standards',
    to: '/code-standards',
    isActive: (location) => {
      return location.pathname.split('/')[1] === 'code-standards';
    }
  },
  {
    text: 'Resources',
    to: '/resources',
    isActive: (location) => {
      return location.pathname.split('/')[1] === 'resources';
    }
  }
];

const logo = {
  src: logoADS,
  alt: 'Anatomy design system logo',
  to: '',
  ariaLabel: 'Anatomy design system home'
};

const primaryNavTexts = {
  searchAriaLabel: 'Search Anatomy site'
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_ID!, process.env.REACT_APP_ALGOLIA_KEY!);
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const index = searchClient.initIndex(process.env.REACT_APP_ALGOLIA_INDEX!);

export const SearchIndexContext = createContext(index);

const Layout = (props: Props): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [pathname, setPathname] = useState('');

  const onSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const onSearch = (query: string, e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  };

  useEffect(() => {
    indexSearch(searchQuery).then((results) => {
      setSearchResults(results);
    });
  }, [searchQuery]);

  useEffect(() => {
    setPathname('https://www.anatomydesignsystem.com' + (location.pathname === '/' ? '' : location.pathname));
  }, [location]);

  useHeadingIds();

  return (
    <>
      <SkipLink destinationId="mainContent" destination="main content" />
      <NavPrimary
        texts={primaryNavTexts}
        logo={logo}
        navItems={navItems}
        searchResults={searchResults}
        isConstrained
        onSearchChange={onSearchChange}
        onSearch={onSearch}
      />
      <SearchIndexContext.Provider value={index}>{props.children}</SearchIndexContext.Provider>
      <footer className="docs-footer">
        <img src={logoBSC} className="docs-footer-logo" alt="Boston Scientific" />
        {!!pathname && <CarbonBadge url={pathname} />}
      </footer>
    </>
  );
};

export default Layout;
