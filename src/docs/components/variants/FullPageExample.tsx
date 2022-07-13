import { useParams } from 'react-router';
import Preview from './Preview';

const FullPageExample = (): JSX.Element => {
  const params = useParams();
  console.log(params);

  return <Preview component={params.componentName!} variant={params.example!} />;
}

export default FullPageExample;