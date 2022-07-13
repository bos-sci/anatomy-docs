import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import { IdLookupContext } from '../App';
import NotFound from '../shared/components/NotFound';
import { IdLookup } from '../shared/types/docs';
import Components from './Components';

const ComponentsController = (): JSX.Element => {
  const params = useParams();
  const navigate = useNavigate();
  const idLookup: IdLookup = useContext(IdLookupContext);

  console.log('invalid');
  if (params.componentName && !Object.keys(idLookup.components).includes(params.componentName)) {
    return <NotFound />;
  }

  // If route is /components/:componentName that should have a group, navigate to /components/:group/:componentName
  // TODO: Do we want to correct the route here or throw a 404?
  const componentFromId = idLookup.components[params.componentName!];
  if (!params.group && componentFromId.group) {
    navigate('../' + componentFromId.group + '/' + params.componentName)
  }

  return <Components componentFromId={componentFromId} />;
}

export default ComponentsController;