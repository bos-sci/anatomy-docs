import Resources from './Resources';
import { Redirect, Switch, Route, useRouteMatch } from 'react-router-dom';

const ResourcesRouter = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Redirect to={`${path}/designers`} />
      </Route>
      <Route path={`${path}/:resourceName`} component={Resources} />
    </Switch>
  );
}

export default ResourcesRouter;