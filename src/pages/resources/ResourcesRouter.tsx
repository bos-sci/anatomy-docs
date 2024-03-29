import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { IdLookupContext } from 'App';
import NotFound from 'shared/components/NotFound';
import { IdLookup } from 'shared/types/docs';
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
