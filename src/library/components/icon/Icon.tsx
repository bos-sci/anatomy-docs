import { lazy, ReactElement, Suspense, useEffect, useState } from 'react';

import './Icon.scss';

interface Props {
  name: string;
  size?: 'sm' | 'md' | 'lg' | '2x' | '3x' | '4x' | 'base';
  className?: string;
}

const Fallback = () => {
  return <>{}</>;
};

const Icon = (props: Props): JSX.Element => {
  const { name, size, className = '' } = props;
  const [sizeClass, setSizeClass] = useState('');
  const [icon, setIcon] = useState<ReactElement>(<>{}</>);

  useEffect(() => {
    setSizeClass(`bsds-icon-${size ? size : '2x'}`);
  }, [size]);

  useEffect(() => {
    const ImportedIcons = {
      IconClose: lazy(() => import('./icons/IconClose')),
      IconEllipsis: lazy(() => import('./icons/IconEllipsis')),
      IconPlus: lazy(() => import('./icons/IconPlus')),
      IconMenu: lazy(() => import('./icons/IconMenu')),
      IconChevronRight: lazy(() => import('./icons/IconChevronRight')),
      IconChevronLeft: lazy(() => import('./icons/IconChevronLeft')),
      IconChevronDown: lazy(() => import('./icons/IconChevronDown')),
      IconChevronUp: lazy(() => import('./icons/IconChevronUp')),
      IconCardDemo: lazy(() => import('./icons/IconCardDemo')),
    };

    switch (name) {
      case 'close':
        setIcon(
          <Suspense fallback={<Fallback />}>
            <ImportedIcons.IconClose className={sizeClass + ' ' + className} />
          </Suspense>
        );
        break;
      case 'ellipsis':
        setIcon(
          <Suspense fallback={<Fallback />}>
            <ImportedIcons.IconEllipsis className={sizeClass + ' ' + className} />
          </Suspense>
        );
        break;
      case 'plus':
        setIcon(
          <Suspense fallback={<Fallback />}>
            <ImportedIcons.IconPlus className={sizeClass + ' ' + className} />
          </Suspense>
        );
        break;
      case 'menu':
        setIcon(
          <Suspense fallback={<Fallback />}>
            <ImportedIcons.IconMenu className={sizeClass + ' ' + className} />
          </Suspense>
        );
        break;
      case 'chevronRight':
        setIcon(
          <Suspense fallback={<Fallback />}>
            <ImportedIcons.IconChevronRight className={sizeClass + ' ' + className} />
          </Suspense>
        );
        break;
      case 'chevronLeft':
        setIcon(
          <Suspense fallback={<Fallback />}>
            <ImportedIcons.IconChevronLeft className={sizeClass + ' ' + className} />
          </Suspense>
        );
        break;
      case 'chevronDown':
        setIcon(
          <Suspense fallback={<Fallback />}>
            <ImportedIcons.IconChevronDown className={sizeClass + ' ' + className} />
          </Suspense>
        );
        break;
      case 'chevronUp':
        setIcon(
          <Suspense fallback={<Fallback />}>
            <ImportedIcons.IconChevronUp className={sizeClass + ' ' + className} />
          </Suspense>
        );
        break;

      case 'demoCardIcon':
        setIcon(
          <Suspense fallback={<Fallback />}>
            <ImportedIcons.IconCardDemo className={className} />
          </Suspense>
        );
        break;

      default:
        setIcon(<p>Failed to load icon</p>);
    }
  }, [className, name, sizeClass]);

  return <>{icon}</>;
};

export default Icon;
