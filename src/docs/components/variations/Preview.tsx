import React, { Suspense, lazy } from 'react';
import Fallback from './Fallback';

interface Props {
  component: string;
  variant: string;
  isDarkTheme?: boolean;
}

export interface VariantProps {
  variant: string;
}

const Preview = ( props: Props ) => {
  let RenderedComponent;

  switch (props.component) {
    case 'breadcrumbs':
      const Default = lazy(() => import('./breadcrumbs/Default'));
      RenderedComponent = (
        <Suspense fallback={<Fallback />}>
          <Default />
        </Suspense>
      );
      break;

    case 'button':
      const ButtonVariants = lazy(() => import('./buttons/ButtonVariants'));
      RenderedComponent = (
        <Suspense fallback={<Fallback />}>
          <ButtonVariants variant={props.variant} />
        </Suspense>
      );
      break;

    case 'radio-button':
      const InputRadioVariants = lazy(() => import('./inputRadio/InputRadioVariants'));
      RenderedComponent = (
        <Suspense fallback={<Fallback />}>
          <InputRadioVariants variant={props.variant} />
        </Suspense>
      );
      break;

    case 'text-input':
      const InputTextVariants = lazy(() => import('./inputTexts/InputTextVariants'));
      RenderedComponent = (
        <Suspense fallback={<Fallback />}>
          <InputTextVariants variant={props.variant} />
        </Suspense>
      );
      break;

    case 'checkbox':
      const InputCheckboxVariants = lazy(() => import('./inputCheckboxes/inputCheckboxVariants'));
      RenderedComponent = (
        <Suspense fallback={<Fallback />}>
          <InputCheckboxVariants variant={props.variant} />
        </Suspense>
      );
      break;

    case 'link':
      const LinkVariants = lazy(() => import('./links/LinkVariants'));
      RenderedComponent = (
        <Suspense fallback={<Fallback />}>
          <LinkVariants variant={props.variant} />
        </Suspense>
      );
      break;


    default:
      RenderedComponent = <p>Failed to load component!</p>;
  }

  return (
    <div className={`demo-example${props.isDarkTheme ? ' dark' : ''}`}>
      { RenderedComponent }
    </div>
  );
}

export default Preview;