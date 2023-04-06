import { HTMLAttributes, ReactElement } from 'react';
import { Props as CardProps } from './ContentCard';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<CardProps> | ReactElement<CardProps>[];
  cardLayout?: 'twoUp' | 'threeUp' | 'fourUp';
}

const CardGroup = ({ children, cardLayout = 'twoUp', className }: Props): JSX.Element => {
  let gridLayout = '';
  switch (cardLayout) {
    case 'twoUp':
      gridLayout = '-two-up';
      break;
    case 'threeUp':
      gridLayout = '-three-up';
      break;
    case 'fourUp':
      gridLayout = '-four-up';
      break;
  }

  return (
    <div className={`${'bsds-card-group'}${gridLayout}${className ? ' ' + className : ''}`} data-testid="bsdsCardGroup">
      {children}
    </div>
  );
};

export default CardGroup;
