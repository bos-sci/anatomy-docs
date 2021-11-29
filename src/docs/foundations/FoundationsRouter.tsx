import Foundations from './Foundations';
import { Redirect, Switch, Route, useRouteMatch } from 'react-router-dom';

const FoundationsRouter = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Redirect to={`${path}/color`} />
      </Route>
      <Route path={`${path}/:foundationName`} component={Foundations} />
    </Switch>
  );
}

export default FoundationsRouter;