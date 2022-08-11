import { Link } from 'react-router-dom';
import Layout from '../Layout';
import './NotFound.scss';

const  NotFound = (): JSX.Element => {
  return (
    <Layout>
      <div className="docs-not-found">
        <main id="mainContent">
          <h1>Oops!</h1>
          <p>Looks like this page doesn't exist.</p>
          <Link to="/">Go to the home page</Link>
        </main>
      </div>
    </Layout>
  );
}

export default NotFound;