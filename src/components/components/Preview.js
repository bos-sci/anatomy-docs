import React, { Suspense, lazy } from 'react';

const Fallback = () => {
  return (
    <p>Loading component...</p>
  );
}

const Preview = ( props ) => {
  switch (props.component) {
    case 'breadcrumbs':
      const Breadcrumb = lazy(() => import('./variations/Breadcrumb'));
      return (
        <Suspense fallback={<Fallback />}>
          <Breadcrumb />
        </Suspense>
      );

    case 'call-to-action':
      const CallToAction = lazy(() => import('./variations/CallToAction'));
      return (
        <Suspense fallback={<Fallback />}>
          <CallToAction>Test Button</CallToAction>
        </Suspense>
      );

    default:
      return <p>Failed to load component!</p>;
  }
}

export default Preview;