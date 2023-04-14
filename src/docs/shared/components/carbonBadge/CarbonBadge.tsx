// TODO: ADS-153 Do we want to add internationalization to this component and include it in the library?

import { useEffect, useState } from 'react';
import { getStorage, setStorage } from '../../helpers';
import './CarbonBadge.scss';

interface CarbonData {
  c: number; // Carbon amount
  p: number; // Percent better
  url: string;
}

interface Props {
  url: string;
}

const CarbonBadge = (props: Props): JSX.Element => {
  const [carbonData, setCarbonData] = useState<CarbonData>();
  const [carbon, setCarbon] = useState<JSX.Element>(
    <>
      Measuring CO<sub>2</sub>&hellip;
    </>
  );
  const [carbonLabel, setCarbonLabel] = useState('Measuring CO2');
  const [percentLabel, setPercentLabel] = useState<string>();

  const noResult = () => {
    setCarbonData(undefined);
    setCarbon(<>No result</>);
    setCarbonLabel('No result');
  };

  useEffect(() => {
    const maybeCarbon = getStorage(`carbon-${props.url}`);
    if (maybeCarbon) {
      setCarbonData(JSON.parse(maybeCarbon));
    } else {
      (async () => {
        try {
          const res = await fetch('https://api.websitecarbon.com/b?url=' + encodeURIComponent(props.url));
          const data: CarbonData = await res.json();
          if (data && data.c && data.p) {
            setCarbonData(data);
            setStorage(`carbon-${props.url}`, JSON.stringify(data), 'release');
          } else {
            noResult();
          }
        } catch (e) {
          noResult();
        }
      })();
    }
  }, [props.url]);

  useEffect(() => {
    if (carbonData && carbonData.c && carbonData.p) {
      setCarbon(
        <>
          {carbonData.c}g of CO<sub>2</sub>/view
        </>
      );
      setCarbonLabel(`${carbonData.c} grams of CO2 per view`);
      setPercentLabel(`Cleaner than ${carbonData.p}% of pages tested`);
    }
  }, [carbonData]);

  return (
    <div className="carbon-badge">
      <div className="carbon-badge-data">
        <span className="carbon-badge-co2" aria-label={carbonLabel}>
          {carbon}
        </span>
        <a className="carbon-badge-link" target="_blank" rel="noopener noreferrer" href="https://websitecarbon.com">
          Website Carbon
        </a>
      </div>
      <span className="carbon-badge-percent" aria-label={percentLabel}>
        {!(carbonData && carbonData.p) && <>&nbsp;</>}
        {!!(carbonData && carbonData.p) && <>Cleaner than {carbonData.p}% of pages tested</>}
      </span>
    </div>
  );
};

export default CarbonBadge;
