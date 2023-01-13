import { Link } from 'react-router-dom';
import Layout from '../Layout';

const  NotFound = (): JSX.Element => {
  return (
    <Layout>
      <div className="docs-body-minimal">
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