import { Button, IconChevronLeft, Link } from '@boston-scientific/anatomy-react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, useSearchParams } from 'react-router-dom';
import Layout from 'shared/components/Layout';
import { ROOT_URL } from 'shared/helpers';
import useTitle from 'shared/hooks/useTitle';
import { CarbonRecord } from 'shared/types/docs';

const PageMetrics = (): JSX.Element => {
  useTitle({ titlePrefix: `Carbon metrics` });

  const [searchParams] = useSearchParams();
  const location = useLocation();

  const [currentParams, setCurrentParams] = useState('');
  const [pageData, setPageData] = useState<CarbonRecord[]>();
  const [isAscending, setIsAscending] = useState(true);
  const [sortCol, setSortCol] = useState('carbon');
  const [lastUpdated, setLastUpdated] = useState('');

  const cleanURL = (url: string): string => {
    const removedRoot = url.replace(ROOT_URL, '');
    if (removedRoot === '') {
      return '/';
    }
    return removedRoot;
  };

  const sortByKey = (data: CarbonRecord[], key: keyof CarbonRecord, isAscending: boolean) => {
    return data.sort((a, z) => {
      if (isAscending) {
        return a[key]! <= z[key]! ? 1 : -1;
      } else {
        return a[key]! > z[key]! ? 1 : -1;
      }
    });
  };

  const toggleSort = (col: keyof CarbonRecord) => {
    if (pageData) {
      setPageData(sortByKey(pageData, col, isAscending));
      setIsAscending(!isAscending);
      setSortCol(col);
    }
  };

  const getSortAria = (col: keyof CarbonRecord): 'ascending' | 'descending' | 'none' | 'other' | undefined => {
    if (sortCol === col) {
      return isAscending ? 'ascending' : 'descending';
    } else {
      return undefined;
    }
  };

  const getHeadingText = (): string => {
    const headingText = 'Carbon metrics for ';
    const params = [];
    if (searchParams.has('url')) {
      params.push(cleanURL(searchParams.get('url') as string));
    }
    if (searchParams.has('date')) {
      params.push(new Date(searchParams.get('date') as string).toLocaleDateString());
    }
    return headingText + params.join(' at ');
  };

  useEffect(() => {
    const getData = async () => {
      setPageData(undefined);
      try {
        const res = await fetch(`/.netlify/functions/getCarbon?${searchParams.toString()}`);
        const data: CarbonRecord[] = await res.json();
        if (data.length > 1) {
          setLastUpdated(data[data.length - 1].date);
        }
        setPageData(data);
      } catch (e) {
        console.error(e);
        setPageData([]);
      }
    };
    if (location.search !== currentParams) {
      getData();
      setCurrentParams(location.search);
    }
  }, [currentParams, location.search, searchParams]);

  return (
    <Layout>
      <Helmet>
        <meta name="description" content="Boston Scientific Anatomy Design System's carbon metrics" />
      </Helmet>
      <div className="docs-body-minimal">
        <main id="mainContent">
          <Link to="../" className="bsds-body-subtle">
            <IconChevronLeft className="bsds-icon-lg bsds-icon-left" />
            Back to metrics overview
          </Link>
          <div className="docs-page-header">
            <div className="docs-metadata">
              <h1>{getHeadingText()}</h1>
              {!!pageData && (
                <dl className="docs-datestamp">
                  <dt>Last updated:</dt>
                  <dd>{new Date(lastUpdated).toLocaleDateString()}</dd>
                </dl>
              )}
            </div>
          </div>
          {!!pageData && pageData.length > 0 && (
            <table className="docs-table-responsive docs-table-sortable">
              <caption className="bsds-visually-hidden">
                {getHeadingText()}. Column headers with buttons are sortable.
              </caption>
              <thead>
                <tr>
                  {!searchParams.has('date') && (
                    <th aria-sort={getSortAria('date')}>
                      <Button
                        variant="subtle"
                        iconAlignment="right"
                        icon={(sortCol === 'date' ? isAscending : false) ? 'chevronUp' : 'chevronDown'}
                        onClick={() => toggleSort('date')}
                      >
                        Date
                      </Button>
                    </th>
                  )}
                  {!searchParams.has('url') && (
                    <th aria-sort={getSortAria('url')}>
                      <Button
                        variant="subtle"
                        iconAlignment="right"
                        icon={(sortCol === 'url' ? isAscending : false) ? 'chevronUp' : 'chevronDown'}
                        onClick={() => toggleSort('url')}
                      >
                        URL
                      </Button>
                    </th>
                  )}
                  <th aria-sort={getSortAria('carbon')}>
                    <Button
                      variant="subtle"
                      iconAlignment="right"
                      icon={(sortCol === 'carbon' ? isAscending : false) ? 'chevronUp' : 'chevronDown'}
                      onClick={() => toggleSort('carbon')}
                    >
                      CO<sub>2</sub> emissions
                    </Button>
                  </th>
                  <th>Percent cleaner</th>
                </tr>
              </thead>
              <tbody>
                {pageData.map((record) => (
                  <tr key={record._id}>
                    {!searchParams.has('date') && (
                      <td>
                        <Link to={`../filter?date=${record.date}`}>{new Date(record.date).toLocaleString()}</Link>
                      </td>
                    )}
                    {!searchParams.has('url') && (
                      <td>
                        <Link to={`../filter?url=${record.url}`}>{cleanURL(record.url)}</Link>
                      </td>
                    )}
                    <td>{record.carbon}</td>
                    <td>{record.percent}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {!pageData && <p>Loading data...</p>}
          {!!pageData && pageData.length === 0 && <p>No data found</p>}
        </main>
      </div>
    </Layout>
  );
};

export default PageMetrics;
