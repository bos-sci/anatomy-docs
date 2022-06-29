import Components from './Components';
import { Redirect, Switch, Route, useRouteMatch } from 'react-router-dom';
import SimpleNavPrimary from './variants/navPrimary/SimpleNavPrimary';
import IntermediateNavPrimary from './variants/navPrimary/IntermediateNavPrimary';
import ComplexNavPrimary from './variants/navPrimary/ComplexNavPrimary';
import DefaultNavWizard from './variants/navWizard/DefaultNavWizard';
import DefaultSkipLink from './variants/skipLink/DefaultSkipLink';

const ComponentsRouter = (): JSX.Element => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        {/* TODO: uncomment when accordion is finished */}
        {/* <Redirect to={`${path}/accordion`} /> */}
        <Redirect to={`${path}/button`} />
      </Route>
      {/* TODO: figure out proper routing for form-controls */}
      <Route path={`${path}/form-controls/:componentName`} component={Components} />
      <Route path={`${path}/navigation/primary-navigation/simple-example`} component={SimpleNavPrimary} />
      <Route path={`${path}/navigation/primary-navigation/intermediate-example`} component={IntermediateNavPrimary} />
      <Route path={`${path}/navigation/primary-navigation/complex-example`} component={ComplexNavPrimary} />
      <Route path={`${path}/navigation/wizard-navigation/example`} component={DefaultNavWizard} />
      <Route path={`${path}/skip-link/example`} component={DefaultSkipLink} />
      <Route path={`${path}/navigation/:componentName`} component={Components} />
      <Route path={`${path}/:componentName`} component={Components} />
    </Switch>
  );
}

export default ComponentsRouter;