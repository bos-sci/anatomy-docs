import { useContext } from 'react';
import { useParams } from 'react-router';
import { IdLookupContext } from 'docs/App';
import NotFound from 'docs/shared/components/NotFound';
import { IdLookup } from 'docs/shared/types/docs';
import Resources from './Resources';

const ResourcesRouter = (): JSX.Element => {
  const params = useParams();
  const idLookup: IdLookup = useContext(IdLookupContext);

  if (params.resourceName && !Object.keys(idLookup.resources).includes(params.resourceName)) {
    return <NotFound />;
  } else if (!params.group && idLookup.resources[params?.resourceName ?? ''].group) {
    return <NotFound />;
  } else {
    return <Resources />;
  }
};

export default ResourcesRouter;
