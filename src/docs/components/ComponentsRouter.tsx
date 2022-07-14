import { useContext } from 'react';
import { useParams } from 'react-router';
import { IdLookupContext } from '../App';
import NotFound from '../shared/components/NotFound';
import { IdLookup } from '../shared/types/docs';
import ComponentsController from './ComponentsController';


const ComponentsRouter = (): JSX.Element => {
  const params = useParams();
  const idLookup: IdLookup = useContext(IdLookupContext);

  if (params.componentName && !Object.keys(idLookup.components).includes(params.componentName)) {
    return <NotFound />;
  } else return <ComponentsController />;
}

export default ComponentsRouter;