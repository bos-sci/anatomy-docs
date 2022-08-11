import { useContext } from 'react';
import { useParams } from 'react-router';
import { IdLookupContext } from '../App';
import NotFound from '../shared/components/notFound/NotFound';
import { IdLookup } from '../shared/types/docs';
import ContentGuidelines from './ContentGuidelines';

const ContentGuidelinesRouter = (): JSX.Element => {
  const params = useParams();
  const idLookup: IdLookup = useContext(IdLookupContext);

  if (params.contentName && !Object.keys(idLookup.contentGuidelines).includes(params.contentName)) {
    return <NotFound />;
  } else return <ContentGuidelines />;
}

export default ContentGuidelinesRouter;