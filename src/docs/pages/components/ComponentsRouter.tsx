import { useContext } from 'react';
import { useParams } from 'react-router';
import { IdLookupContext } from 'docs/App';
import NotFound from 'docs/shared/components/NotFound';
import { IdLookup } from 'docs/shared/types/docs';
import ComponentsController from './ComponentsController';

interface Props {
  isExternal?: boolean;
}

const ComponentsRouter = (props: Props): JSX.Element => {
  const params = useParams();
  const idLookup: IdLookup = useContext(IdLookupContext);

  if (params.componentName && !Object.keys(idLookup.components).includes(params.componentName)) {
    return <NotFound />;
  } else if (!params.group && idLookup.components[params?.componentName ?? ''].group) {
    return <NotFound />;
  } else {
    return <ComponentsController isExternal={props?.isExternal ?? false} />;
  }
};

export default ComponentsRouter;
