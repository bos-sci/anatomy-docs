import Example from '../../../shared/components/Example';
import Link from '../../../../library/components/Link';
import IconArrowRight from '../../../../library/components/icon/icons/IconArrowRight';

const CtaStyle = (): JSX.Element => {
  return (
    <Example>
      <Link href="#" variant="cta">
        CTA link
        <IconArrowRight className="ads-link-cta-icon"/>
      </Link>
    </Example>
  );
}

export default CtaStyle;