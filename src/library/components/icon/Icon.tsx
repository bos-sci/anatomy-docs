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
    case 'bars':
      const IconBars = lazy(() => import('./icons/IconBars'));
      return (
        <Suspense fallback={<Fallback />}>
          <IconBars className={sizeClass + ' ' + props.className} />
        </Suspense>
      );
    case 'chevronRight':
      const IconChevronRight = lazy(() => import('./icons/IconChevronRight'));
      return (
        <Suspense fallback={<Fallback />}>
          <IconChevronRight className={sizeClass + ' ' + props.className} />
        </Suspense>
      );
    case 'chevronLeft':
      const IconChevronLeft = lazy(() => import('./icons/IconChevronLeft'));
      return (
        <Suspense fallback={<Fallback />}>
          <IconChevronLeft className={sizeClass + ' ' + props.className} />
        </Suspense>
      );
    case 'chevronDown':
      const IconChevronDown = lazy(() => import('./icons/IconChevronDown'));
      return (
        <Suspense fallback={<Fallback />}>
         <IconChevronDown className={sizeClass + ' ' + props.className} />
        </Suspense>
      );
    case 'chevronUp':
      const IconChevronUp = lazy(() => import('./icons/IconChevronUp'));
      return (
        <Suspense fallback={<Fallback />}>
          <IconChevronUp className={sizeClass + ' ' + props.className} />
        </Suspense>
      );

    default:
      return <p>Failed to load icon</p>;
  }
}

export default Icon;