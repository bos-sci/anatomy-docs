import React, { Suspense, lazy } from 'react';

const Fallback = () => {
  return (
    <p>Loading component...</p>
  );
}

interface Props {
  component: string;
  variant: string;
  isDarkTheme?: boolean;
}

const Preview = ( props: Props ) => {
  let RenderedComponent;

  switch (props.component) {
    case 'breadcrumbs':
      const Default = lazy(() => import('./variations/breadcrumbs/Default'));
      RenderedComponent = (
        <Suspense fallback={<Fallback />}>
          <Default />
        </Suspense>
      );
      break;

    case 'button':
      switch (props.variant) {
        case 'Assertive':
          const Assertive = lazy(() => import('./variations/buttons/Assertive'));
          RenderedComponent = (
            <Suspense fallback={<Fallback />}>
              <Assertive />
            </Suspense>
          );
          break;

        case 'Ghost':
          const Ghost = lazy(() => import('./variations/buttons/Ghost'));
          RenderedComponent = (
            <Suspense fallback={<Fallback />}>
              <Ghost />
            </Suspense>
          );
          break;

        case 'Subtle':
          const Subtle = lazy(() => import('./variations/buttons/Subtle'));
          RenderedComponent = (
            <Suspense fallback={<Fallback />}>
              <Subtle />
            </Suspense>
          );
          break;

        default:
          const Default = lazy(() => import('./variations/buttons/Default'));
          RenderedComponent = (
            <Suspense fallback={<Fallback />}>
              <Default />
            </Suspense>
          );
      }
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