import Layout from './Layout';
import { IdLookupContext } from '../../App';
import { IdLookup, IdLookupProperties } from '../types/docs';
import { useContext } from 'react';
import Card from '../../../library/components/Card';
import CardGroup from '../../../library/components/CardGroup';
import { slugify } from '../helpers';
import { useLocation } from 'react-router';
import useTitle from '../hooks/useTitle';
import Tag from '../../../library/components/Tag';

interface Props {
  heading: string;
  collection: string;
}

const LandingPage = (props: Props): JSX.Element => {
  const location = useLocation();
  const idLookup: IdLookup = useContext(IdLookupContext);
  const listItems = idLookup[props.collection as keyof IdLookup];

  const getUrl = (item: IdLookupProperties) => {
    return '.' + location.pathname + (item.group ? '/' + item.group : '') + '/' + slugify(item.name);
  }

  useTitle({titlePrefix: props.heading});

  return (
    <Layout>
      <div className="docs-body-minimal">
        <main id="mainContent">
          <h1>{props.heading}</h1>
          <CardGroup cardLayout="threeUp" className="bsds-mt-6x">
            {Object.keys(listItems).sort((a, b) => (listItems[a].group || '') > (listItems[b].group || '') ? 1 : -1).map(key =>
              <Card
                key={listItems[key].id}
                texts={{
                  cardTitle: listItems[key].name,
                  cardDescription: listItems[key].leadParagraph as string
                }}
                tag={<Tag>{listItems[key].group}</Tag>}
                headingLevel="h2"
                variant="border-light"
                linkHref={getUrl(listItems[key])}
                linkTitle
              />
            )}
          </CardGroup>
        </main>
      </div>
    </Layout>
  );
}

export default LandingPage;