import { Button, Link } from '@boston-scientific/anatomy-react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from 'shared/components/Layout';
import { ROOT_URL } from 'shared/helpers';
import useTitle from 'shared/hooks/useTitle';
import { CarbonRecord } from 'shared/types/docs';
import SparkChart from './SparkChart';

export interface Averages {
  date: string;
  carbon: number;
  percent: number;
}

const CarbonMetrics = (): JSX.Element => {
  useTitle({ titlePrefix: `Carbon metrics` });

  const [allData, setAllData] = useState<CarbonRecord[]>();
  const [latestData, setLatestData] = useState<CarbonRecord[]>();
  const [prevData, setPrevData] = useState<CarbonRecord[]>();
  const [isAscending, setIsAscending] = useState(true);
  const [sortCol, setSortCol] = useState('carbon');
  const [averages, setAverages] = useState<Averages[]>();
  const [lastUpdated, setLastUpdated] = useState('');

  const cleanURL = (url: string): string => {
    const removedRoot = url.replace(ROOT_URL, '');
    if (removedRoot === '') {
      return '/';
    }
    return removedRoot;
  };

  const isDataReady = allData && latestData;

  const getAverages = (data: CarbonRecord[], date: string) => ({
    date,
    carbon: Number((data.reduce((acc, cur) => acc + cur.carbon, 0) / data.length).toFixed(3)),
    percent: Number((data.reduce((acc, cur) => acc + cur.percent, 0) / data.length).toFixed(2))
  });

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
    if (latestData) {
      setLatestData(sortByKey(latestData, col, isAscending));
      setIsAscending(col !== sortCol || !isAscending);
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

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('/.netlify/functions/getAllCarbon');
        const data: CarbonRecord[] = await res.json();
        setAllData(data);
        const dates = new Set<string>();
        data.forEach((record) => dates.add(record.date));
        const datesArray: string[] = Array.from(dates).sort().reverse();
        setLastUpdated(datesArray[0]);
        const latest: CarbonRecord[] = data.filter((record) => record.date === datesArray[0]);
        latest.sort((a, z) => a.carbon - z.carbon);
        setLatestData(latest);
        if (datesArray.length > 1) {
          setPrevData(data.filter((record) => record.date === datesArray[1]));
        } else {
          setPrevData([]);
        }
      } catch {
        setAllData([]);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (latestData && prevData && allData) {
      const grouped: { [key: string]: CarbonRecord[] } = {};
      allData.forEach((record) => {
        if (grouped[record.date]) {
          grouped[record.date].push(record);
        } else {
          grouped[record.date] = [record];
        }
      });
      const averages = Object.keys(grouped).map((date) => getAverages(grouped[date], date));
      averages.sort((a, z) => (a.date <= z.date! ? 1 : -1));
      setAverages(averages);
    }
  }, [latestData, allData, prevData]);

  const getLatestChanges = () => {
    if (averages) {
      return {
        carbon: averages[averages.length - 1].carbon - averages[averages.length - 2].carbon,
        percent: averages[averages.length - 1].percent - averages[averages.length - 2].percent
      };
    } else {
      return {
        carbon: 0,
        percent: 0
      };
    }
  };

  return (
    <Layout>
      <Helmet>
        <meta name="description" content="Boston Scientific Anatomy Design System's carbon metrics" />
      </Helmet>
      <div className="docs-body-minimal">
        <main id="mainContent">
          <div className="docs-page-header">
            <div className="docs-metadata">
              <h1 className="docs-title">Carbon metrics</h1>
              {!!latestData && (
                <dl className="docs-datestamp">
                  <dt>Last Updated:</dt>
                  <dd>{new Date(lastUpdated).toLocaleDateString()}</dd>
                </dl>
              )}
            </div>
          </div>
          {!!isDataReady && allData.length > 0 && (
            <>
              {!!averages && (
                <div className="docs-metrics-tile-grid">
                  <div className="docs-metrics-tile">
                    <h3 className="mt-0">
                      CO<sub>2</sub> emissions
                    </h3>
                    <p className="docs-metrics-tile-description">Average grams of carbon emitted per page.</p>
                    <p className="docs-metrics-tile-value">{averages[averages.length - 1].carbon.toPrecision(3)}g</p>
                    <p className="docs-metrics-tile-change">
                      {getLatestChanges().carbon >= 0 && '+'}
                      {getLatestChanges().carbon}g
                    </p>
                    <SparkChart data={averages} yValue="carbon" />
                  </div>
                  <div className="docs-metrics-tile">
                    <h3>Percent cleaner</h3>
                    <p className="docs-metrics-tile-description">
                      Average score against other sites tested with Website Carbon.
                    </p>
                    <p className="docs-metrics-tile-value">{averages[averages.length - 1].percent.toFixed(2)}%</p>
                    <p className="docs-metrics-tile-change">
                      {getLatestChanges().percent >= 0 && '+'}
                      {getLatestChanges().percent}%
                    </p>
                    <SparkChart data={averages} yValue="percent" />
                  </div>
                </div>
              )}
              <h3>Pages</h3>
              <table className="docs-table-responsive docs-table-sortable">
                <caption className="bsds-visually-hidden">
                  Most recent carbon data for each page across the Anatomy documentation site. Column headers with
                  buttons are sortable.
                </caption>
                <thead>
                  <tr>
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
                  {latestData.map((record) => (
                    <tr key={record._id}>
                      <td>
                        <Link to={`./filter?url=${record.url}`}>{cleanURL(record.url)}</Link>
                      </td>
                      <td>{record.carbon}g</td>
                      <td>{record.percent}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
          {!isDataReady && !allData && <p>Loading data...</p>}
          {!!isDataReady && allData.length === 0 && <p>No data found</p>}
          {!isDataReady && !!allData && allData.length === 0 && <p>Error retrieving data</p>}
        </main>
      </div>
    </Layout>
  );
};

export default CarbonMetrics;
