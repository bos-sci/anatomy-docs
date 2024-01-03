import { Button, Link } from '@boston-scientific/anatomy-react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, useSearchParams } from 'react-router-dom';
import Layout from 'shared/components/Layout';
import { ROOT_URL } from 'shared/helpers';
import useTitle from 'shared/hooks/useTitle';
import { CarbonRecord } from 'shared/types/docs';

const PageMetrics = (): JSX.Element => {
  useTitle({ titlePrefix: `Carbon Metrics` });

  const [searchParams] = useSearchParams();
  const location = useLocation();

  const [currentParams, setCurrentParams] = useState('');
  const [pageData, setPageData] = useState<CarbonRecord[]>();
  const [isAscending, setIsAscending] = useState(true);
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

  const toggleSort = (key: keyof CarbonRecord) => {
    if (pageData) {
      const dataToSort = sortByKey(pageData, key, isAscending);
      setPageData(dataToSort);
      setIsAscending(!isAscending);
    }
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
        <meta name="description" content="Boston Scientific Anatomy Design System website carbon metrics" />
      </Helmet>
      <div className="docs-body-minimal">
        <main id="mainContent">
          <div className="docs-page-header">
            <div className="docs-metadata">
              <h1 className="docs-title">Filtered carbon metrics</h1>
              {!!pageData && (
                <dl className="docs-datestamp">
                  <dt>Last Updated:</dt>
                  <dd>{new Date(lastUpdated).toLocaleDateString()}</dd>
                </dl>
              )}
            </div>
          </div>
          <Link to="../">Back to metrics overview</Link>
          <h2>Filters</h2>
          <dl className="docs-carbon-filters">
            {searchParams.has('date') && (
              <>
                <dt>Date:</dt>
                <dd>{new Date(searchParams.get('date') as string).toLocaleDateString()}</dd>
              </>
            )}
            {searchParams.has('url') && (
              <>
                <dt>Url:</dt>
                <dd>{cleanURL(searchParams.get('url') as string)}</dd>
              </>
            )}
          </dl>
          {!!pageData && pageData.length > 0 && (
            <table className="docs-table-responsive">
              <caption className="bsds-visually-hidden">Carbon data for the page {searchParams.get('url')}</caption>
              <thead>
                <tr>
                  {!searchParams.has('date') && (
                    <th className="docs-table-header-sortable" aria-sort={isAscending ? 'ascending' : 'descending'}>
                      <Button
                        variant="subtle"
                        iconAlignment="right"
                        icon={isAscending ? 'chevronUp' : 'chevronDown'}
                        onClick={() => toggleSort('date')}
                      >
                        Date
                      </Button>
                    </th>
                  )}
                  {!searchParams.has('url') && (
                    <th className="docs-table-header-sortable" aria-sort={isAscending ? 'ascending' : 'descending'}>
                      <Button
                        variant="subtle"
                        iconAlignment="right"
                        icon={isAscending ? 'chevronUp' : 'chevronDown'}
                        onClick={() => toggleSort('url')}
                      >
                        Url
                      </Button>
                    </th>
                  )}
                  <th>Carbon (g of CO2)</th>
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
