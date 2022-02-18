// TODO: figure out why ads-icon-2x svgs also getting undefined

import { lazy, Suspense } from 'react';

import './Icon.scss';

interface Props {
  name: string;
  size?: 'sm'
    | 'md'
    | 'lg'
    | '2x'
    | '3x'
    | '4x'
    | 'base';
  className?: string;
}

const Fallback = () => {
  return <></>
}

const Icon = (props: Props): JSX.Element => {

  const sizeClass = `ads-icon-${props.size ? props.size : '2x'}`;

  switch (props.name) {
    case 'plus':
      const IconPlus = lazy(() => import('./icons/IconPlus'));
      return (
        <Suspense fallback={<Fallback />}>
          <IconPlus className={sizeClass + ' ' + props.className} />
        </Suspense>
      );
    case 'chevronRight':
      const IconChevronRight = lazy(() => import('./icons/IconChevronRight'));
      return (
        <Suspense fallback={<Fallback />}>
          <IconChevronRight className={sizeClass + ' ' + props.className} />
        </Suspense>
      );
    case 'arrowLeft':
      const IconArrowLeft = lazy(() => import('./icons/IconArrowLeft'));
      return (
        <Suspense fallback={<Fallback />}>
          <IconArrowLeft className={sizeClass + ' ' + props.className} />
        </Suspense>
      );
    case 'arrowRight':
      const IconArrowRight = lazy(() => import('./icons/IconArrowRight'));
      return (
        <Suspense fallback={<Fallback />}>
          <IconArrowRight className={sizeClass + ' ' + props.className} />
        </Suspense>
      );

    default:
      return <p>Failed to load icon</p>;
  }
}

export default Icon;