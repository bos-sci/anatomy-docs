import { useState, useEffect, createContext, Suspense, useCallback, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { slugify } from 'shared/helpers';
import { useGetCollectionsQuery } from 'shared/types/contentful';
import { IdLookup, IdLookupEntry } from 'shared/types/docs';
import Home from 'pages/Home';
import NotFound from 'shared/components/NotFound';
import SearchResults from 'pages/SearchResults';
import LandingPage from 'shared/components/LandingPage';

const CodeStandardsRouter = lazy(() => import('pages/codeStandards/CodeStandardsRouter'));
const ComponentsRouter = lazy(() => import('pages/components/ComponentsRouter'));
const ContentGuidelinesRouter = lazy(() => import('pages/contentGuidelines/ContentGuidelinesRouter'));
const FoundationsRouter = lazy(() => import('pages/foundations/FoundationsRouter'));
const ResourcesRouter = lazy(() => import('pages/resources/ResourcesRouter'));

interface Collection {
  items: {
    sys: {
      id: string;
    };
    name: string;
    group?: string;
    leadParagraph?: string;
  }[];
}

const initialIdLookup: IdLookup = {
  contentGuidelines: {},
  components: {},
  codeStandards: {},
  foundations: {},
  resources: {}
};

export const IdLookupContext = createContext<IdLookup>(initialIdLookup);

interface RedirectProps {
  href: string;
}

const Redirect = (props: RedirectProps) => {
  window.location.replace(props.href);
  return (
    <p>
      Redirecting to <a href={props.href}>{props.href}</a>
    </p>
  );
};

const App = (): JSX.Element => {
  const [idLookup, setIdLookup] = useState<IdLookup>({} as IdLookup);
  const [isLookupReady, setIsLookupReady] = useState(false);
  const { data, error } = useGetCollectionsQuery({
    variables: {
      preview: process.env.REACT_APP_CONTENTFUL_PREVIEW === 'true'
    }
  });

  if (error) {
    console.error(error);
  }

  const createLookup = useCallback((collection: Collection, destination: IdLookupEntry) => {
    collection.items.forEach(
      (item) =>
        (destination[slugify(item?.name as string)] = {
          id: item?.sys.id,
          name: item?.name,
          group: item?.group ? slugify(item.group) : null,
          leadParagraph: item?.leadParagraph
        })
    );
  }, []);

  useEffect(() => {
    if (data) {
      const idMap: IdLookup = initialIdLookup;
      createLookup(data.foundationCollection as Collection, idMap.foundations);
      createLookup(data.contentGuidelineCollection as Collection, idMap.contentGuidelines);
      createLookup(data.codeStandardCollection as Collection, idMap.codeStandards);
      createLookup(data.componentCollection as Collection, idMap.components);
      createLookup(data.resourceCollection as Collection, idMap.resources);

      setIdLookup(idMap);
      setIsLookupReady(true);
    }
  }, [data, createLookup]);

  return (
    <Router>
      <IdLookupContext.Provider value={idLookup}>
        {!!isLookupReady && (
          <Suspense
            fallback={
              <main id="mainContent">
                <p>Loading...</p>
              </main>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="storybook"
                element={
                  <Redirect
                    href={`https://${
                      process.env.REACT_APP_DEVELOPMENT_MODE === 'production' ? 'main' : 'develop'
                    }--64e769384ef6b440f819fcec.chromatic.com`}
                  />
                }
              />

              <Route path="components">
                <Route path="" element={<LandingPage heading="Components" collection="components" />} />
                <Route path=":componentName">
                  <Route path="" element={<ComponentsRouter />} />
                  <Route path="example/:example" element={<ComponentsRouter isExternal />} />
                </Route>

                <Route path=":group">
                  <Route path=":componentName">
                    <Route path="" element={<ComponentsRouter />} />
                    <Route path="example/:example" element={<ComponentsRouter isExternal />} />
                  </Route>
                </Route>
              </Route>

              <Route path="code-standards">
                <Route path="" element={<LandingPage heading="Code standards" collection="codeStandards" />} />
                <Route path=":standardName" element={<CodeStandardsRouter />} />
              </Route>

              <Route path="content">
                <Route path="" element={<LandingPage heading="Content" collection="contentGuidelines" />} />
                <Route path=":contentName" element={<ContentGuidelinesRouter />} />
              </Route>

              <Route path="foundations">
                <Route path="" element={<LandingPage heading="Foundations" collection="foundations" />} />
                <Route path=":foundationName" element={<FoundationsRouter />} />
                <Route path=":group/:foundationName" element={<FoundationsRouter />} />
              </Route>

              <Route path="resources">
                <Route path="" element={<LandingPage heading="Resources" collection="resources" />} />
                <Route path=":resourceName" element={<ResourcesRouter />} />
                <Route path=":group/:resourceName" element={<ResourcesRouter />} />
                <Route path="developers/code-standards/general" element={<Navigate to="../../code-standards" />} />
              </Route>

              <Route path="search" element={<SearchResults />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        )}
      </IdLookupContext.Provider>
    </Router>
  );
};

export default App;
