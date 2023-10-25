import { Suspense, lazy, useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NotFound from 'shared/components/NotFound';
import useTitle from 'shared/hooks/useTitle';
import { ComponentModifier, GetComponentQuery } from 'shared/types/contentful';
import { ComponentContext } from 'pages/components/ComponentsController';
import DefaultNavWizard from 'pages/components/variants/navWizard/DefaultNavWizard';
import Fallback from './Fallback';

export interface VariantProps {
  variantId: string;
}

interface Props {
  variant?: string;
  variantId?: string;
  shouldLinkToExamples?: boolean;
  isExternal?: boolean;
}

const Preview = (props: Props): JSX.Element => {
  const params = useParams();
  const data = useContext(ComponentContext);

  const [componentData, setComponentData] = useState<GetComponentQuery['component']>(
    {} as GetComponentQuery['component']
  );
  const [renderedComponent, setRenderedComponent] = useState<JSX.Element | null>(null);
  const [variant, setVariant] = useState<ComponentModifier | null | undefined>(undefined);

  useEffect(() => {
    if (data) {
      setComponentData(data);
    }
  }, [data]);

  useEffect(() => {
    let currentVariant: ComponentModifier | null = null;

    currentVariant = componentData?.modifiersCollection?.items.find(
      (variant) => variant?.modifierId === params.example
    ) as ComponentModifier;

    if (!currentVariant) {
      currentVariant = componentData?.stylesCollection?.items.find(
        (variant) => variant?.styleId === params.example
      ) as ComponentModifier;
    }

    if (!currentVariant) {
      currentVariant = componentData?.statesCollection?.items.find(
        (variant) => variant?.stateId === params.example
      ) as ComponentModifier;
    }

    setVariant(currentVariant === undefined ? null : currentVariant);
  }, [componentData, params.example]);

  let title = '';
  if (componentData?.name) {
    title = componentData.name;

    if (props.isExternal && params.example) {
      title = (variant?.name ? variant.name : 'Default') + ' - ' + title;
    }
  }

  useTitle({
    titlePrefix: `${title} - Components`
  });

  useEffect(() => {
    const variantId = props.variantId ?? (params.example as string);

    const ComponentControllers = {
      AccordionController: lazy(() => import('./accordion/_AccordionController')),
      BreadcrumbController: lazy(() => import('./breadcrumbs/_BreadcrumbController')),
      ButtonController: lazy(() => import('./buttons/_ButtonController')),
      ContentCardController: lazy(() => import('./contentCard/_ContentCardController')),
      CardGroupController: lazy(() => import('./cardGroup/_CardGroupController')),
      DropdownController: lazy(() => import('./dropdown/_DropdownController')),
      InputCheckboxController: lazy(() => import('./inputCheckbox/_inputCheckboxController')),
      DefaultForm: lazy(() => import('./forms/DefaultForm')),
      FieldsetController: lazy(() => import('./fieldset//_FieldsetController')),
      ImageController: lazy(() => import('./image/_ImageController')),
      LinkController: lazy(() => import('./link/_LinkController')),
      ModalController: lazy(() => import('./modals/_modalController')),
      NavPrimaryController: lazy(() => import('./navPrimary/_NavPrimaryController')),
      ProductCardController: lazy(() => import('./productCard/_ProductCardController')),
      InputRadioGroupController: lazy(() => import('./inputRadioGroup/_InputRadioGroupController')),
      RibbonController: lazy(() => import('./ribbon/_RibbonController')),
      DefaultSearch: lazy(() => import('./search/DefaultSearch')),
      DefaultNavSecondary: lazy(() => import('./navSecondary/DefaultNavSecondary')),
      DefaultSkipLink: lazy(() => import('./skipLink/DefaultSkipLink')),
      StoplightController: lazy(() => import('./stoplight/_StoplightController')),
      TabsController: lazy(() => import('./tabs/_TabsController')),
      TagController: lazy(() => import('./tag/_TagController')),
      DefaultNavTertiary: lazy(() => import('./navTertiary/DefaultNavTertiary')),
      InputTextController: lazy(() => import('./inputText/_InputTextController')),
      TextareaController: lazy(() => import('./textarea/_TextareaController')),
      SelectController: lazy(() => import('./select/_SelectController'))
    };

    if (props.shouldLinkToExamples) {
      setRenderedComponent(
        <Link
          className="docs-demo-link"
          to={`example/${props.variantId ? props.variantId : 'default'}`}
          target="_blank"
        >
          See {props.variant?.toLowerCase() || 'example'}
        </Link>
      );
    } else {
      switch (params.componentName) {
        case 'accordion':
          setRenderedComponent(<ComponentControllers.AccordionController variantId={variantId} />);
          break;

        case 'breadcrumbs':
          setRenderedComponent(<ComponentControllers.BreadcrumbController variantId={variantId} />);
          break;

        case 'button':
          setRenderedComponent(<ComponentControllers.ButtonController variantId={variantId} />);
          break;

        case 'content-card':
          setRenderedComponent(<ComponentControllers.ContentCardController variantId={variantId} />);
          break;

        case 'card-group':
          setRenderedComponent(<ComponentControllers.CardGroupController variantId={variantId} />);
          break;

        case 'dropdown-menu':
          setRenderedComponent(<ComponentControllers.DropdownController variantId={variantId} />);
          break;

        case 'checkbox':
          setRenderedComponent(<ComponentControllers.InputCheckboxController variantId={variantId} />);
          break;

        case 'form':
          setRenderedComponent(<ComponentControllers.DefaultForm />);
          break;

        case 'fieldset':
          setRenderedComponent(<ComponentControllers.FieldsetController variantId={variantId} />);
          break;

        case 'image':
          setRenderedComponent(<ComponentControllers.ImageController variantId={variantId} />);
          break;

        case 'link':
          setRenderedComponent(<ComponentControllers.LinkController variantId={variantId} />);
          break;

        case 'modal':
          setRenderedComponent(<ComponentControllers.ModalController variantId={variantId} />);
          break;

        case 'primary-navigation':
          setRenderedComponent(<ComponentControllers.NavPrimaryController variantId={variantId} />);
          break;

        case 'product-card':
          setRenderedComponent(<ComponentControllers.ProductCardController variantId={variantId} />);
          break;

        case 'radio-group':
          setRenderedComponent(<ComponentControllers.InputRadioGroupController variantId={variantId} />);
          break;

        case 'ribbon':
          setRenderedComponent(<ComponentControllers.RibbonController variantId={variantId} />);
          break;

        case 'search':
          setRenderedComponent(<ComponentControllers.DefaultSearch />);
          break;

        case 'select':
          setRenderedComponent(<ComponentControllers.SelectController variantId={variantId} />);
          break;

        case 'secondary-navigation':
          setRenderedComponent(<ComponentControllers.DefaultNavSecondary />);
          break;

        case 'skip-link':
          setRenderedComponent(<ComponentControllers.DefaultSkipLink />);
          break;

        case 'stoplight':
          setRenderedComponent(<ComponentControllers.StoplightController variantId={variantId} />);
          break;

        case 'tabs':
          setRenderedComponent(<ComponentControllers.TabsController variantId={variantId} />);
          break;

        case 'tag':
          setRenderedComponent(<ComponentControllers.TagController variantId={variantId} />);
          break;

        case 'tertiary-navigation':
          setRenderedComponent(<ComponentControllers.DefaultNavTertiary />);
          break;

        case 'text-input':
          setRenderedComponent(<ComponentControllers.InputTextController variantId={variantId} />);
          break;

        case 'textarea':
          setRenderedComponent(<ComponentControllers.TextareaController variantId={variantId} />);
          break;

        case 'wizard-navigation':
          setRenderedComponent(<DefaultNavWizard />);
          break;

        default:
          setRenderedComponent(<p>Failed to load component!</p>);
      }
    }
  }, [props, params]);

  if (
    variant === null &&
    params.example !== 'default' &&
    componentData?.name &&
    props.isExternal &&
    renderedComponent
  ) {
    return <NotFound />;
  } else {
    return <Suspense fallback={<Fallback />}>{renderedComponent}</Suspense>;
  }
};

export default Preview;
