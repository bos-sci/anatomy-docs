import { useContext } from 'react';
import { useParams } from 'react-router';
import { IdLookupContext } from '../App';
import NotFound from '../shared/components/NotFound';
import { IdLookup } from '../shared/types/docs';
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
