import { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { IdLookupContext } from 'docs/App';
import { GetComponentQuery, useGetComponentQuery } from 'docs/shared/types/contentful';
import { IdLookup } from 'docs/shared/types/docs';
import Components from './Components';
import Preview from 'docs/pages/components/variants/Preview';

export const ComponentContext = createContext<GetComponentQuery['component']>({} as GetComponentQuery['component']);

interface Props {
  isExternal?: boolean;
}

const ComponentsController = (props: Props): JSX.Element => {
  const params = useParams();
  const idLookup: IdLookup = useContext(IdLookupContext);

  const [componentData, setComponentData] = useState<GetComponentQuery['component']>(
    {} as GetComponentQuery['component']
  );

  const componentFromId = idLookup.components[params?.componentName ?? ''];

  const { data, error } = useGetComponentQuery({
    variables: {
      id: componentFromId.id,
      preview: process.env.REACT_APP_CONTENTFUL_PREVIEW === 'true'
    }
  });

  if (error) {
    console.error(error);
  }

  useEffect(() => {
    if (data) {
      setComponentData(data.component);
    }
  }, [data]);

  if (props.isExternal) {
    return (
      <ComponentContext.Provider value={componentData}>
        <Preview isExternal />
      </ComponentContext.Provider>
    );
  }

  return (
    <ComponentContext.Provider value={componentData}>
      <Components />
    </ComponentContext.Provider>
  );
};

export default ComponentsController;
