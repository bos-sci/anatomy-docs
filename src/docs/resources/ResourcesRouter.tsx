import Resources from './Resources';
import { Redirect, Switch, Route, useRouteMatch } from 'react-router-dom';

const ResourcesRouter = (): JSX.Element => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Redirect to={`${path}/community`} />
      </Route>
      <Route path={`${path}/designers/:resourceName`} component={Resources} />
      <Route path={`${path}/:resourceName`} component={Resources} />
    </Switch>
  );
}

export default ResourcesRouter;