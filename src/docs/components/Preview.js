import React, { Suspense, lazy } from 'react';

const Fallback = () => {
  return (
    <p>Loading component...</p>
  );
}

const Preview = ( props ) => {
  switch (props.component) {
    case 'breadcrumbs':
      const Default = lazy(() => import('./variations/breadcrumbs/Default'));
      return (
        <Suspense fallback={<Fallback />}>
          <Default />
        </Suspense>
      );

    case 'button':
      switch (props.variant) {
        case 'Assertive':
          const Assertive = lazy(() => import('./variations/buttons/Assertive'));
          return (
            <Suspense fallback={<Fallback />}>
              <Assertive />
            </Suspense>
          );
        case 'Ghost':
          const Ghost = lazy(() => import('./variations/buttons/Ghost'));
          return (
            <Suspense fallback={<Fallback />}>
              <Ghost />
            </Suspense>
          );
        case 'Subtle':
          const Subtle = lazy(() => import('./variations/buttons/Subtle'));
          return (
            <Suspense fallback={<Fallback />}>
              <Subtle />
            </Suspense>
          );

        default:
          const Default = lazy(() => import('./variations/buttons/Default'));
          return (
            <Suspense fallback={<Fallback />}>
              <Default />
            </Suspense>
          );
      }

    default:
      return <p>Failed to load component!</p>;
  }
}

export default Preview;