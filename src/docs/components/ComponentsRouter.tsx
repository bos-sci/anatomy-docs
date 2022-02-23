import Components from './Components';
import { Redirect, Switch, Route, useRouteMatch } from 'react-router-dom';

const ComponentsRouter = (): JSX.Element => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Redirect to={`${path}/breadcrumbs`} />
      </Route>
      {/* TODO: figure out proper routing for form-controls */}
      <Route path={`${path}/form-controls/:componentName`} component={Components} />
      <Route path={`${path}/:componentName`} component={Components} />
    </Switch>
  );
}

export default ComponentsRouter;