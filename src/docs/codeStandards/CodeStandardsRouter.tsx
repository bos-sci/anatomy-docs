import { useContext } from 'react';
import { useParams } from 'react-router';
import { IdLookupContext } from '../App';
import NotFound from '../shared/components/NotFound';
import { IdLookup } from '../shared/types/docs';
import CodeStandards from './CodeStandards';


const CodeStandardsRouter = (): JSX.Element => {
  const params = useParams();
  const idLookup: IdLookup = useContext(IdLookupContext);

  if (params.standardName && !Object.keys(idLookup.codeStandards).includes(params.standardName)) {
    return <NotFound />;
  } else return <CodeStandards />;
}

export default CodeStandardsRouter;