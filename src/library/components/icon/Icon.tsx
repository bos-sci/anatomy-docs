// TODO: ADS-385 figure out why bsds-icon-2x svgs also getting undefined

import { lazy, ReactElement, Suspense, useEffect, useState } from 'react';

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
  const {name, size, className = ''} = props;
  const [sizeClass, setSizeClass] = useState('');
  const [icon, setIcon] = useState<ReactElement>(<></>);

  useEffect(() => {
    setSizeClass(`bsds-icon-${size ? size : '2x'}`);
  }, [size]);

  useEffect(() => {
    switch (name) {
      case 'ellipsis':
        const IconEllipsis = lazy(() => import('./icons/IconEllipsis'));
        setIcon(
          <Suspense fallback={<Fallback />}>
            <IconEllipsis className={sizeClass + ' ' + className} />
          </Suspense>
        );
        break;
      case 'plus':
        const IconPlus = lazy(() => import('./icons/IconPlus'));
        setIcon(
          <Suspense fallback={<Fallback />}>
            <IconPlus className={sizeClass + ' ' + className} />
          </Suspense>
        );
        break;
      case 'menu':
        const IconMenu = lazy(() => import('./icons/IconMenu'));
        setIcon(
          <Suspense fallback={<Fallback />}>
            <IconMenu className={sizeClass + ' ' + className} />
          </Suspense>
        );
        break;
      case 'chevronRight':
        const IconChevronRight = lazy(() => import('./icons/IconChevronRight'));
        setIcon(
          <Suspense fallback={<Fallback />}>
            <IconChevronRight className={sizeClass + ' ' + className} />
          </Suspense>
        );
        break;
      case 'chevronLeft':
        const IconChevronLeft = lazy(() => import('./icons/IconChevronLeft'));
        setIcon(
          <Suspense fallback={<Fallback />}>
            <IconChevronLeft className={sizeClass + ' ' + className} />
          </Suspense>
        );
        break;
      case 'chevronDown':
        const IconChevronDown = lazy(() => import('./icons/IconChevronDown'));
        setIcon(
          <Suspense fallback={<Fallback />}>
           <IconChevronDown className={sizeClass + ' ' + className} />
          </Suspense>
        );
        break;
      case 'chevronUp':
        const IconChevronUp = lazy(() => import('./icons/IconChevronUp'));
        setIcon(
          <Suspense fallback={<Fallback />}>
            <IconChevronUp className={sizeClass + ' ' + className} />
          </Suspense>
        );
        break;

      case 'demoCardIcon':
        const IconCardDemo = lazy(() => import('./icons/IconCardDemo'));
        setIcon(
          <Suspense fallback={<Fallback />}>
            <IconCardDemo className={className}/>
          </Suspense>
        );
        break;

      default:
        setIcon(<p>Failed to load icon</p>);
    }
  }, [className, name, sizeClass]);

  return <>{icon}</>;
}

export default Icon;