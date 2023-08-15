import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { IdLookupContext } from 'docs/App';
import NotFound from 'docs/shared/components/NotFound';
import { IdLookup } from 'docs/shared/types/docs';
import CodeStandards from './CodeStandards';

const CodeStandardsRouter = (): JSX.Element => {
  const params = useParams();
  const idLookup: IdLookup = useContext(IdLookupContext);

  if (params.standardName && !Object.keys(idLookup.codeStandards).includes(params.standardName)) {
    return <NotFound />;
  } else {
    return <CodeStandards />;
  }
};

export default CodeStandardsRouter;
