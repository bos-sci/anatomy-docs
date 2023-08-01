import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { IdLookupContext } from 'docs/App';
import NotFound from 'docs/shared/components/NotFound';
import { IdLookup } from 'docs/shared/types/docs';
import Foundations from './Foundations';

const FoundationsRouter = (): JSX.Element => {
  const params = useParams();
  const idLookup: IdLookup = useContext(IdLookupContext);

  if (params.foundationName && !Object.keys(idLookup.foundations).includes(params.foundationName)) {
    return <NotFound />;
  } else if (!params.group && idLookup.foundations[params?.foundationName ?? ''].group) {
    return <NotFound />;
  } else {
    return <Foundations />;
  }
};

export default FoundationsRouter;
