// TODO: ADS-153 Do we want to add internationalization to this component and include it in the library?

import { useEffect, useState } from 'react';
import { getStorage, setStorage } from 'shared/helpers';
import { Link } from '@boston-scientific/anatomy-react';

interface CarbonData {
  c: number; // Carbon amount
  p: number; // Percent better
  url: string;
}

interface Props {
  url: string;
}

const CarbonRibbon = (props: Props): JSX.Element => {
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
    <div className="ribbon-carbon is-constrained">
      <div className="ribbon-carbon-content">
        <p className="bsds-visually-hidden">
          {carbonLabel}. {percentLabel}.
        </p>
        <span className="ribbon-carbon-co2" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            aria-hidden="true"
            className="bsds-icon-left ribbon-carbon-icon"
          >
            <path
              fill="currentColor"
              d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.2 5.4c-25.9 5.9-50 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"
            />
          </svg>
          {carbon}
        </span>
        <div className="ribbon-carbon-percent" aria-hidden="true">
          {!(carbonData && carbonData.p) && <>&nbsp;</>}
          {!!(carbonData && carbonData.p) && <>Cleaner than {carbonData.p}% of pages tested</>}
        </div>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://websitecarbon.com"
          variant="ghost"
          className="ribbon-carbon-link"
        >
          Website Carbon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            aria-hidden="true"
            className="bsds-icon-right ribbon-carbon-icon"
          >
            <path
              fill="currentColor"
              d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CarbonRibbon;
