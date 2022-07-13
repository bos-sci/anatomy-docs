import { Link } from 'react-router-dom';

const  NotFound = (): JSX.Element => {
  return <>
    <p>Oops! Looks like this page doesn't exist.</p>
    <Link to="/">Back to home</Link>
  </>;
}

export default NotFound;