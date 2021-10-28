import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import ComponentsRouter from './components/components-router';
import NavPrimary from './shared/nav-primary';

function App() {
  return (
    <Router>
      <div className="grid-container">
        <NavPrimary />
        <div className="container-fluid container-lg app-body">
          <div className="row">
            <div className="col-12 col-lg-9 col-xl-10">
              <Switch>
                <Route exact path="/">
                  <Redirect to="/components" />
                </Route>
                <Route path="/components" component={ComponentsRouter} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
