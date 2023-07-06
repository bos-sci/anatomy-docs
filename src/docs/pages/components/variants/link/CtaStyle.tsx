import Example from 'docs/shared/components/Example';
import Link from 'library/components/Link';
import IconArrowRight from 'library/components/icon/icons/IconArrowRight';

const CtaStyle = (): JSX.Element => {
  return (
    <Example>
      <Link href="docs-demo-link" variant="cta">
        CTA link
        <IconArrowRight className="bsds-link-cta-icon" />
      </Link>
    </Example>
  );
};

export default CtaStyle;
