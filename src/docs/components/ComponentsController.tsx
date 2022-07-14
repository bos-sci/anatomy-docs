import { createContext, useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { IdLookupContext } from '../App';
import { GetComponentQuery, useGetComponentQuery } from '../shared/types/contentful';
import { IdLookup } from '../shared/types/docs';
import Components from './Components';
import Preview from './variants/Preview';

export const ComponentContext = createContext<GetComponentQuery['component']>({} as GetComponentQuery['component']);

interface Props {
  isExternal?: boolean;
}

const ComponentsController = (props: Props): JSX.Element => {
  const params = useParams();
  const navigate = useNavigate();
  const idLookup: IdLookup = useContext(IdLookupContext);

  const [componentData, setComponentData] = useState<GetComponentQuery['component']>({} as GetComponentQuery['component']);

  // If route is /components/:componentName that should have a group, navigate to /components/:group/:componentName
  // TODO: Do we want to correct the route here or throw a 404?
  const componentFromId = idLookup.components[params.componentName!];
  if (!params.group && componentFromId.group) {
    navigate('../' + componentFromId.group + '/' + params.componentName)
  }

  const {data, error} = useGetComponentQuery({
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
  }, [data])


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
}

export default ComponentsController;