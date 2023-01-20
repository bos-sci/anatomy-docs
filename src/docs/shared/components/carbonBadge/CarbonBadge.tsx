import { useEffect, useState } from 'react';
import './CarbonBadge.scss';

interface CarbonData {
  c: number; // Carbon amount
  p: number; // Percent better
  url: string;
}

interface Props {
  url: string;
  carbon?: number;
  percent?: number;
  isDarkMode?: boolean;
}

const CarbonBadge = (props: Props): JSX.Element => {

  const [carbonData, setCarbonData] = useState<CarbonData>();
  const [carbon, setCarbon] = useState<JSX.Element>(<>Measuring CO<sub>2</sub>&hellip;</>);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('https://api.websitecarbon.com/b?url=' + encodeURIComponent(props.url));
        const data = await res.json();
        setCarbonData(data);
        setCarbon(<>{data.c}g of CO<sub>2</sub>/view</>);
      } catch(e) {
        setCarbonData(undefined);
        setCarbon(<>No Result</>);
      }
    })();
  }, [props.url]);

  return (
    <div id="wcb" className={`carbonbadge wcb${props.isDarkMode ? '-d' : ''}`}>
      <div id="wcb_p">
        <span id="wcb_g">
          { carbon }
        </span>
        <a id="wcb_a" target="_blank" rel="noopener noreferrer" href="https://websitecarbon.com">Website Carbon</a>
      </div>
      <span id="wcb_2">
        { !(carbonData && carbonData.p) && <>&nbsp;</> }
        { (carbonData && carbonData.p) && <>Cleaner than {carbonData.p}% of pages tested</> }
      </span>
    </div>
  );
}

export default CarbonBadge;