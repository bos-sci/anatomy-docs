import ContentGuidelines from './ContentGuidelines';
import { Redirect, Switch, Route, useRouteMatch } from 'react-router-dom';

const CodeStandardsRouter = (): JSX.Element => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Redirect to={`${path}/audiences`} />
      </Route>
      <Route path={`${path}/:contentName`} component={ContentGuidelines} />
    </Switch>
  );
}

export default CodeStandardsRouter;