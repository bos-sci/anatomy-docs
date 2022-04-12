import Components from './Components';
import { Redirect, Switch, Route, useRouteMatch } from 'react-router-dom';
import DefaultNavPrimary from './variants/navPrimary/DefaultNavPrimary';

const ComponentsRouter = (): JSX.Element => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Redirect to={`${path}/accordion`} />
      </Route>
      {/* TODO: figure out proper routing for form-controls */}
      <Route path={`${path}/form-controls/:componentName`} component={Components} />
      <Route path={`${path}/navigation/:componentName/example`} component={DefaultNavPrimary} />
      <Route path={`${path}/navigation/:componentName`} component={Components} />
      <Route path={`${path}/:componentName`} component={Components} />
    </Switch>
  );
}

export default ComponentsRouter;