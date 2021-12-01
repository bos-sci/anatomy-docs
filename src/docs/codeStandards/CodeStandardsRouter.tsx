import CodeStandards from './CodeStandards';
import { Redirect, Switch, Route, useRouteMatch } from 'react-router-dom';

const CodeStandardsRouter = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Redirect to={`${path}/general`} />
      </Route>
      <Route path={`${path}/:standardName`} component={CodeStandards} />
    </Switch>
  );
}

export default CodeStandardsRouter;