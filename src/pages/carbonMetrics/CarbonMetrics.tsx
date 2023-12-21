import { Button, Link } from '@boston-scientific/anatomy-react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from 'shared/components/Layout';
import useTitle from 'shared/hooks/useTitle';
import { CarbonRecord, CarbonResult } from 'shared/types/docs';

interface Averages {
  carbon: number;
  percent: number;
  carbonChange: number;
  percentChange: number;
}

const CarbonMetrics = (): JSX.Element => {
  useTitle({ titlePrefix: `Carbon Metrics` });

  const [allData, setAllData] = useState<CarbonRecord[]>();
  const [latestData, setLatestData] = useState<CarbonRecord>();
  const [isAscending, setIsAscending] = useState(true);
  const [averages, setAverages] = useState<Averages>();

  const cleanURL = (url: string): string => {
    const removedRoot = url.replace('https://www.anatomydesignsystem.com', '');
    if (removedRoot === '') {
      return '/';
    }
    return removedRoot;
  };

  const isDataReady = allData && latestData;

  const getAverages = (data: CarbonResult[]) => {
    return {
      carbon: data.reduce((acc, cur) => acc + cur.carbon, 0) / data.length,
      percent: data.reduce((acc, cur) => acc + cur.percent, 0) / data.length
    };
  };

  const toggleSort = () => {
    if (latestData) {
      const dataToSort = latestData;
      dataToSort.results.sort((a, z) => (!isAscending ? a.carbon - z.carbon : z.carbon - a.carbon));
      setLatestData(dataToSort);
      setIsAscending(!isAscending);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('./.netlify/functions/getAllCarbon');
      const data = await res.json();
      setAllData(data.records);
      const latest: CarbonRecord = data.records[data.records.length - 1];
      latest.results.sort((a, z) => a.carbon - z.carbon);
      setLatestData(latest);
    };
    getData();
  }, []);

  useEffect(() => {
    if (latestData && allData) {
      const latestAverages = getAverages(latestData.results);
      const prevAverages = getAverages(allData[allData.length - 2].results);
      setAverages({
        carbon: latestAverages.carbon,
        percent: latestAverages.percent,
        carbonChange: latestAverages.carbon - prevAverages.carbon,
        percentChange: latestAverages.percent - prevAverages.percent
      });
    }
  }, [latestData, allData]);

  return (
    <Layout>
      <Helmet>
        <meta name="description" content="Boston Scientific Anatomy Design System website carbon metrics" />
      </Helmet>
      <div className="docs-body-minimal">
        <main id="mainContent">
          <div className="docs-page-header">
            <div className="docs-metadata">
              <h1 className="docs-title">Carbon Metrics</h1>
              {!!latestData && (
                <dl className="docs-datestamp">
                  <dt>Last Updated:</dt>
                  <dd>{new Date(latestData.date).toLocaleDateString()}</dd>
                </dl>
              )}
            </div>
          </div>
          {!!isDataReady && allData.length > 0 && (
            <>
              <h3>Statistics</h3>
              {!!averages && (
                <table>
                  <tbody>
                    <tr>
                      <td></td>
                      <th scope="col">Average</th>
                      <th scope="col">Change</th>
                    </tr>
                    <tr>
                      <th scope="row">Carbon</th>
                      <td>{averages.carbon.toPrecision(3)}g</td>
                      <td>
                        {averages.carbonChange >= 0 && '+'}
                        {averages.carbonChange.toFixed(2)}g
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Percent</th>
                      <td>{averages.percent.toFixed(2)}%</td>
                      <td>
                        {averages.percentChange >= 0 && '+'}
                        {averages.percentChange.toFixed(2)}%
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
              <h3>Pages</h3>
              <table className="docs-table-responsive">
                <caption className="bsds-visually-hidden">
                  Most recent carbon data for each page across the Anatomy documentation site.
                </caption>
                <thead>
                  <tr>
                    <th>URL</th>
                    <th className="docs-table-header-sortable" aria-sort={isAscending ? 'ascending' : 'descending'}>
                      <Button
                        variant="subtle"
                        iconAlignment="right"
                        icon={isAscending ? 'chevronUp' : 'chevronDown'}
                        onClick={toggleSort}
                      >
                        Carbon (g of CO2)
                      </Button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {latestData.results.map((record) => (
                    <tr key={record.url + 'top'}>
                      <td>
                        <Link to={`./page?page=${cleanURL(record.url)}`}>{cleanURL(record.url)}</Link>
                      </td>
                      <td>{record.carbon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
          {!isDataReady && <p>Loading data...</p>}
          {!!isDataReady && allData.length === 0 && <p>No data found</p>}
        </main>
      </div>
    </Layout>
  );
};

export default CarbonMetrics;
