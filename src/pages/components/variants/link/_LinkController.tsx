import { VariantProps } from '../Preview';
import DefaultLink from './DefaultLink';
import DefaultStyle from './DefaultStyle';
import SubtleStyle from './SubtleStyle';
import GhostStyle from './GhostStyle';
import CtaStyle from './CtaStyle';
import NavStyle from './NavStyle';
import MailtoStyle from './MailtoStyle';

const LinkController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Styles
    case 'linkDefault':
      return <DefaultStyle />;
    case 'linkSubtle':
      return <SubtleStyle />;
    case 'linkGhost':
      return <GhostStyle />;
    case 'linkCta':
      return <CtaStyle />;
    case 'linkMailto':
      return <MailtoStyle />;
    case 'linkNavigation':
      return <NavStyle />;

    default:
      return <DefaultLink />;
  }
};

export default LinkController;
