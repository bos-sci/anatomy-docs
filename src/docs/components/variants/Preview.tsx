import { Suspense, lazy, useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useTitle from '../../shared/hooks/useTitle';
import { ComponentModifier, GetComponentQuery } from '../../shared/types/contentful';
import { ComponentContext } from '../ComponentsController';
import Fallback from './Fallback';
import DefaultNavWizard from './navWizard/DefaultNavWizard';

export interface VariantProps {
  variantId: string;
}

interface Props {
  variant?: string;
  variantId?: string;
  shouldLinkToExamples?: boolean;
  isExternal?: boolean;
}

const Preview = ( props: Props ): JSX.Element => {
  const params = useParams();
  const data = useContext(ComponentContext);

  const [componentData, setComponentData] = useState<GetComponentQuery['component']>({} as GetComponentQuery['component']);
  const [renderedComponent, setRenderedComponent] = useState<JSX.Element>(<></>);
  const [variant, setVariant] = useState<ComponentModifier | null>(null);

  useEffect(() => {
    if(data) {
      setComponentData(data);
    }
  }, [data]);

  useEffect(() => {
    let currentVariant: ComponentModifier | null = null;

    currentVariant = componentData?.modifiersCollection?.items.find(variant => variant?.modifierId === params.example) as ComponentModifier;

    if (!currentVariant) {
      currentVariant = componentData?.stylesCollection?.items.find(variant => variant?.styleId === params.example) as ComponentModifier;
    }

    if (!currentVariant) {
      currentVariant = componentData?.statesCollection?.items.find(variant => variant?.stateId === params.example) as ComponentModifier;
    }

    setVariant(currentVariant);
  }, [componentData, params.example]);

  let title;
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
    const variantId = props.variantId ? props.variantId : params.example!;

    if (props.shouldLinkToExamples) {
      setRenderedComponent(<Link className="demo-link" to={`example/${props.variantId}`}target="_blank">See {props.variant || 'example'}</Link>);
    } else {
      switch (params.componentName) {
        case 'accordion':
          const DefaultAccordion = lazy(() => import('./accordion/DefaultAccordion'));
          setRenderedComponent(<DefaultAccordion />);
          break;

        case 'breadcrumbs':
          const BreadcrumbVariants = lazy(() => import('./breadcrumbs/BreadcrumbVariants'));
          setRenderedComponent(<BreadcrumbVariants variantId={variantId} />);
          break;

        case 'button':
          const ButtonVariants = lazy(() => import('./buttons/ButtonVariants'));
          setRenderedComponent(<ButtonVariants variantId={variantId} />);
          break;

        case 'checkbox':
          const InputCheckboxVariants = lazy(() => import('./inputCheckbox/inputCheckboxVariants'));
          setRenderedComponent(<InputCheckboxVariants variantId={variantId} />);
          break;

        case 'checkbox-group':
          const InputCheckboxGroupVariants = lazy(() => import('./inputCheckboxGroup/InputCheckboxGroupVariants'));
          setRenderedComponent(<InputCheckboxGroupVariants variantId={variantId} />);
          break;

        case 'form':
          const DefaultForm = lazy(() => import('./forms/DefaultForm'));
          setRenderedComponent(<DefaultForm />);
          break;

        case 'link':
          const LinkVariants = lazy(() => import('./link/LinkVariants'));
          setRenderedComponent(<LinkVariants variantId={variantId} />);
          break;

        case 'navigation-link':
          const DefaultNavLink = lazy(() => import('./navLink/DefaultNavLink'));
          setRenderedComponent(<DefaultNavLink />);
          break;

        case 'primary-navigation':
          const NavPrimaryController = lazy(() => import('./navPrimary/_NavPrimaryController'));
          setRenderedComponent(<NavPrimaryController variantId={variantId} />);
          break;

        case 'radio-group':
          const InputRadioGroupVariants = lazy(() => import('./inputRadioGroup/InputRadioGroupVariants'));
          setRenderedComponent(<InputRadioGroupVariants variantId={variantId} />);
          break;

        case 'secondary-navigation':
          const DefaultNavSecondary = lazy(() => import('./navSecondary/DefaultNavSecondary'));
          setRenderedComponent(<DefaultNavSecondary />);
          break;

        case 'skip-link':
          setRenderedComponent(<Link className="demo-link" to="/components/skip-link/example" target="_blank">See example</Link>);
          break;

        case 'stoplight':
          const StoplightVariants = lazy(() => import('./stoplight/StoplightVariants'));
          setRenderedComponent(<StoplightVariants variantId={variantId} />);
          break;

        case 'tabs':
          const DefaultTabs = lazy(() => import('./tabs/DefaultTabs'));
          setRenderedComponent(<DefaultTabs />);
          break;

        case 'tag':
          const TagVariants = lazy(() => import('./tag/TagVariants'));
          setRenderedComponent(<TagVariants variantId={variantId} />);
          break;

        case 'tertiary-navigation':
          const DefaultNavTertiary = lazy(() => import('./navTertiary/DefaultNavTertiary'));
          setRenderedComponent(<DefaultNavTertiary />);
          break;

        case 'text-input':
          const InputTextVariants = lazy(() => import('./inputText/InputTextVariants'));
          setRenderedComponent(<InputTextVariants variantId={variantId} />);
          break;

        case 'wizard-navigation':
          setRenderedComponent(<DefaultNavWizard />);
          break;

        default:
          setRenderedComponent(<p>Failed to load component!</p>);
      }
    }
  }, [props, params]);

  return (
    <Suspense fallback={<Fallback />}>
      {renderedComponent}
    </Suspense>
  );
}

export default Preview;