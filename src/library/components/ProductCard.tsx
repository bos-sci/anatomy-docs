import { ReactElement, useState, useEffect, cloneElement, useId, useRef } from 'react';
import HeadingElement from './Heading';
import Link from './Link';
import { Props as TagProps } from './Tag';
import { Props as ImageProps } from './Image';

interface Props {
  tag?: ReactElement<TagProps>;
  texts: {
    title: string;
    description: string;
  };
  linkTo: string;
  headingLevel?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  assertiveTitle?: boolean;
  variant?: 'ghost' | 'border-light' | 'border-ghost';
  image?: ReactElement<ImageProps>;
  gradientBrand?: boolean;
  dropShadow?: boolean;
}

const ProductCard = (props: Props): JSX.Element => {
  const { tag, texts, headingLevel, linkTo, variant, assertiveTitle = false, image, gradientBrand, dropShadow } = props;

  let cardStyles = {
    classes: '',
    titleLinkClasses: '',
    linkClasses: '',
  };

  const defaultStyle = {
    classes: 'bsds-card',
    titleLinkClasses: 'bsds-link-subtle',
    linkClasses: 'bsds-product-card-ns-title',
  };

  const ghostStyle = {
    classes: 'bsds-card-ghost',
    titleLinkClasses: 'bsds-link-ghost',
    linkClasses: 'bsds-product-card-ns-title-ghost',
  };

  const borderLightStyle = {
    classes: 'bsds-card-border-light',
    titleLinkClasses: 'bsds-link-subtle',
    linkClasses: 'bsds-product-card-ns-title',
  };

  const borderGhostStyle = {
    classes: 'bsds-card-border-ghost',
    titleLinkClasses: 'bsds-link-ghost',
    linkClasses: 'bsds-product-card-ns-title-ghost',
  };

  const [style, setStyle] = useState(cardStyles.classes);
  const [linkStyle, setLinkStyle] = useState(cardStyles.linkClasses);
  const [clonedImage, setClonedImage] = useState<ReactElement>();
  const [clonedTag, setClonedTag] = useState<ReactElement>();

  const productNameId = useId();
  const imageLink = useRef<HTMLAnchorElement>(null);

  switch (variant) {
    case 'ghost':
      cardStyles = { ...ghostStyle };
      break;
    case 'border-light':
      cardStyles = { ...borderLightStyle };
      break;
    case 'border-ghost':
      cardStyles = { ...borderGhostStyle };
      break;

    default:
      cardStyles = { ...defaultStyle };
      break;
  }

  let decorativeState = '';
  if (gradientBrand && variant?.includes('ghost')) {
    decorativeState = 'bsds-card-gradient';
    cardStyles = { ...borderGhostStyle };
  } else if (gradientBrand) {
    decorativeState = 'bsds-card-gradient';
    cardStyles = { ...borderLightStyle };
  } else if (dropShadow && variant?.includes('ghost')) {
    decorativeState = 'bsds-card-shadow';
    cardStyles = { ...borderGhostStyle };
  } else if (dropShadow) {
    decorativeState = 'bsds-card-shadow';
    cardStyles = { ...borderLightStyle };
  }

  useEffect(() => {
    setStyle(
      decorativeState
        ? `${'bsds-product-card'} ${cardStyles.classes} ${decorativeState}`
        : `${'bsds-product-card'} ${cardStyles.classes}`
    );
  }, [decorativeState, cardStyles.classes]);

  useEffect(() => {
    setLinkStyle(
      assertiveTitle
        ? `${cardStyles.linkClasses}${'-assertive'} ${'link-hitbox'}`
        : `${cardStyles.linkClasses} ${'link-hitbox'}`
    );
  }, [assertiveTitle, cardStyles.linkClasses]);

  useEffect(() => {
    if (tag) {
      setClonedTag(
        cloneElement(tag as ReactElement, {
          isGhost: variant === 'ghost' || variant === 'border-ghost',
        })
      );
    }
  }, [tag, variant]);

  useEffect(() => {
    if (image) {
      setClonedImage(
        cloneElement(image as ReactElement, {
          ratio: image.props.ratio ? image.props.ratio : '1:1',
          isDecorative: false,
          isGhost: variant === 'ghost' || variant === 'border-ghost',
          onClick: () => imageLink.current?.click(),
        })
      );
    }
  }, [image, linkTo, variant]);

  const defaultProductCard = (
    <div className={style} data-testid="bsdsProductCard">
      {!!image && clonedImage}
      {!!tag && clonedTag}
      {headingLevel ? (
        <HeadingElement headingLevel={headingLevel} className="bsds-card-title" id={'productTitle' + productNameId}>
          <Link ref={imageLink} href={linkTo} className={`${cardStyles.titleLinkClasses} ${'link-hitbox'}`}>
            {texts.title}
          </Link>
        </HeadingElement>
      ) : (
        <Link ref={imageLink} href={linkTo} className={linkStyle} id={'productTitle' + productNameId}>
          {texts.title}
        </Link>
      )}
      <p className="bsds-card-description">{texts?.description}</p>
    </div>
  );

  if (image?.props.ratio === '50:50') {
    return (
      <div data-testid="bsdsProductCard" className="bsds-product-card-even-split">
        {!!image && clonedImage}
        <div className={style}>
          {!!tag && clonedTag}
          {headingLevel ? (
            <HeadingElement headingLevel={headingLevel} className="bsds-card-title" id={'productTitle' + productNameId}>
              <Link ref={imageLink} href={linkTo} className={`${cardStyles.titleLinkClasses} ${'link-hitbox'}`}>
                {texts.title}
              </Link>
            </HeadingElement>
          ) : (
            <Link ref={imageLink} href={linkTo} className={linkStyle} id={'productTitle' + productNameId}>
              {texts.title}
            </Link>
          )}
          <p className="bsds-card-description">{texts?.description}</p>
        </div>
      </div>
    );
  }

  return defaultProductCard;
};

export default ProductCard;
