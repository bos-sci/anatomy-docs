import { createContext, FormEvent, ReactNode, useEffect, useState } from 'react';
import SkipLink from '../../../library/components/SkipLink';
import logoADS from "../../../assets/images/logo-anatomy.svg";
import logoBSC from "../../../assets/images/logo-bsc.svg";
import NavPrimary, { NavItemPrimary } from '../../../library/components/navigation/navPrimary/NavPrimary';
import algoliasearch from 'algoliasearch';
import { SearchResult } from '../../../library/components/Search';
import { useNavigate } from 'react-router-dom';
import { indexSearch } from '../helpers';
import useHeadingIds from '../hooks/useHeadingIds';
import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';
import { useLocation } from 'react-router';

interface Props {
  children: ReactNode;
}

const navItems: NavItemPrimary[] = [
  {
    text: 'Home',
    slug: '/',
    isExactMatch: true
  },
  {
    text: 'Content',
    slug: '/content/audiences',
    isActive: (location) => {
      return location.pathname.split('/')[1] === 'content';
    }
  },
  {
    text: 'Foundations',
    slug: '/foundations/accessibility',
    isActive: (location) => {
      return location.pathname.split('/')[1] === 'foundations';
    }
  },
  {
    text: 'Components',
    slug: '/components/accordion',
    isActive: (location) => {
      return location.pathname.split('/')[1] === 'components';
    }
  },
  {
    text: 'Code standards',
    slug: '/resources/developers/code-standards/general',
    isActive: (location) => {
      return location.pathname.split('/')[1] === 'code-standards';
    }
  },
  {
    text: 'Resources',
    slug: '/resources/community',
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

const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_ID!, process.env.REACT_APP_ALGOLIA_KEY!);
const index = searchClient.initIndex(process.env.REACT_APP_ALGOLIA_INDEX!);

export const SearchIndexContext = createContext(index);

const Layout = (props: Props): JSX.Element => {

  const location = useLocation();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const onSearchChange = (query: string) => {
    setSearchQuery(query);
  }

  const onSearch = (query: string, e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  }

  useEffect(() => {
    indexSearch(searchQuery).then((results) => {
      setSearchResults(results);
    });
  }, [searchQuery]);

  useHeadingIds();

  return <>
    <SkipLink destinationId="mainContent" destination="main content"/>
    <NavPrimary texts={primaryNavTexts} logo={logo} navItems={navItems} searchResults={searchResults} onSearchChange={onSearchChange} onSearch={onSearch} isConstrained />
    <SearchIndexContext.Provider value={index}>
      { props.children }
    </SearchIndexContext.Provider>
    <footer className="docs-footer">
      <img src={logoBSC} className="docs-footer-logo" alt="Boston Scientific"/>
      <WebsiteCarbonBadge
        url={"https://www.anatomydesignsystem.com" + (location.pathname === '/' ? '' :  location.pathname)}
      />
    </footer>
  </>;
}

export default Layout;