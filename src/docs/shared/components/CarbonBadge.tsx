import React, { useEffect, useState } from "react";
import './carbon.scss';

interface CarbonScore {
  carbon: number;
  percent: number;
}

interface Props {
  darkMode?: string;
  className?: string;
}

const CarbonBadge = (props: Props) => {

  const [score, setScore] = useState<CarbonScore>();

  useEffect(() => {
    const wcU = encodeURIComponent(window.location.href)

    const newRequest = function (render = true) {
      // Run the API request because there is no cached result available
      fetch('https://api.websitecarbon.com/b?url=' + wcU)
        .then(function (r) {
          if (!r.ok) {
            throw Error(JSON.stringify(r));
          }
          return r.json();
        })
        .then(function (r) {
          if (render) {
            setScore({
              carbon: r.c,
              percent: r.p
            });
          }

          // Save the result into localStorage with a timestamp
          r.t = new Date().getTime();
          localStorage.setItem('wcb_'+wcU, JSON.stringify(r));
        })
        // Handle error responses
        .catch(function (e) {
          setScore({carbon: -1, percent: -1});
          console.log(e);
          localStorage.removeItem('wcb_'+wcU);
        })
    }

    if (('fetch' in window)) {

      // Get result if it's saved
      let cachedResponse = localStorage.getItem('wcb_' + wcU);
      const t = new Date().getTime();

      // If there is a cached response, use it
      if (cachedResponse) {
        const r = JSON.parse(cachedResponse);
        setScore({
          carbon: r.c,
          percent: r.p
        });

        // If time since response was cached is over a day, then make a new request and update the cached result in the background
        if ((t - r.t) > (86400000)) {
          newRequest(false);
        }

      // If no cached response, then fetch from API
      } else {
        newRequest()
      }
    }
  }, []);

  return (
    <div id="wcb" className={`wcb carbonbadge${props.darkMode ? ` wcb-d` : '' }${props.className ? ' ' + props.className : ''}`}>
      <div id="wcb_p">
        {score?.carbon === undefined ?
          <span id="wcb_g">Measuring CO<sub>2</sub>&hellip;</span>
          : score?.carbon >= 0 ?
            <span>{score.carbon}g of CO<sub>2</sub>/view</span>
            : <span id="wcb_g">No results</span>
        }
        <a id="wcb_a" target="_blank" rel="noreferrer" href="https://websitecarbon.com">Website Carbon</a>
      </div>
      <span id="wcb_2">{(score && score.percent >= 0) && <>Cleaner than {score?.percent}% of pages tested</>}</span>
    </div>
  );
}

export default CarbonBadge;
