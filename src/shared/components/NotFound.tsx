import { Link } from 'react-router-dom';
import Layout from 'shared/components/Layout';

const NotFound = (): JSX.Element => {
  return (
    <Layout>
      <div className="docs-body-minimal">
        <main id="mainContent">
          <h1>Page not found</h1>
          <p>Looks like this page doesn&apos;t exist.</p>
          <Link to="/">Go to the home page</Link>
        </main>
      </div>
    </Layout>
  );
};

export default NotFound;
