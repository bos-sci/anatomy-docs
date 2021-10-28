import Components from './components';
import { Redirect, Switch, Route, useRouteMatch } from 'react-router-dom';

const ComponentsRouter = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Redirect to={`${path}/breadcrumbs`} />
      </Route>
      <Route path={`${path}/:component`} component={Components} />
    </Switch>
  );
}

export default ComponentsRouter;