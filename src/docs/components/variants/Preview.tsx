import React, { Suspense, lazy } from 'react';
import Fallback from './Fallback';

interface Props {
  component: string;
  variant: string;
  variantId?: string;
  isDarkTheme?: boolean;
}

export interface VariantProps {
  variantId: string;
}

const Preview = ( props: Props ): JSX.Element => {
  let RenderedComponent;

  switch (props.component) {
    case 'breadcrumbs':
      const DefaultBreadcrumbs = lazy(() => import('./breadcrumbs/DefaultBreadcrumbs'));
      RenderedComponent = <DefaultBreadcrumbs />;
      break;

    case 'button':
      const ButtonVariants = lazy(() => import('./buttons/ButtonVariants'));
      RenderedComponent = <ButtonVariants variantId={props.variantId as string} />;
      break;

    case 'checkbox':
      const InputCheckboxVariants = lazy(() => import('./inputCheckbox/inputCheckboxVariants'));
      RenderedComponent = <InputCheckboxVariants variantId={props.variantId as string} />;
      break;

    case 'checkbox-group':
      const InputCheckboxGroupVariants = lazy(() => import('./inputCheckboxGroup/InputCheckboxGroupVariants'));
      RenderedComponent = <InputCheckboxGroupVariants variantId={props.variantId as string} />;
      break;

    case 'link':
      const LinkVariants = lazy(() => import('./link/LinkVariants'));
      RenderedComponent = <LinkVariants variantId={props.variantId as string} />;
      break;

    case 'radio-group':
      const InputRadioGroupVariants = lazy(() => import('./inputRadioGroup/InputRadioGroupVariants'));
      RenderedComponent = <InputRadioGroupVariants variantId={props.variantId as string} />;
      break;

    case 'tabs':
      const DefaultTabs = lazy(() => import('./tabs/DefaultTabs'));
      RenderedComponent = <DefaultTabs />;
      break;

    case 'text-input':
      const InputTextVariants = lazy(() => import('./inputText/InputTextVariants'));
      RenderedComponent = <InputTextVariants variantId={props.variantId as string} />;
      break;

    default:
      RenderedComponent = <p>Failed to load component!</p>;
  }

  return (
    <Suspense fallback={<Fallback />}>
      { RenderedComponent }
    </Suspense>
  );
}

export default Preview;