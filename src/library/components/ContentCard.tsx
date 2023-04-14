import { ReactElement, cloneElement, useState, useEffect, useId } from 'react';
import HeadingElement from './Heading';
import { Props as ImageProps } from './Image';
import { Props as TagProps } from './Tag';
import Link from './Link';
import Icon from './icon/Icon';

interface PlainCardProps {
  texts: {
    cardTitle: string;
    cardDescription: string;
  };
  variant?: string;
  headingLevel: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  tag?: ReactElement<TagProps>;
  image?: ReactElement<ImageProps>;
  icon?: boolean;
  iconName?: string;
}

type LinkedCardProps =
  | {
      linkTitle?: boolean;
      linkHref?: string;
      actionLink?: never;
      actionLinkText?: never;
    }
  | {
      linkTitle?: never;
      linkHref: string;
      actionLink: boolean;
      actionLinkText: string;
    };

type HoverProps =
  | {
      gradientBrand?: boolean;
      dropShadow?: never;
    }
  | {
      gradientBrand?: never;
      dropShadow?: boolean;
    };

type BaseProps = PlainCardProps & LinkedCardProps;
export type Props = BaseProps & HoverProps;

const ContentCard = (props: Props): JSX.Element => {
  const {
    texts,
    variant,
    headingLevel,
    tag,
    image,
    icon,
    iconName,
    linkTitle,
    linkHref,
    actionLink,
    actionLinkText,
    gradientBrand,
    dropShadow,
  } = props;

  const cardTitleId = useId();

  let cardStyles = {
    classes: '',
    titleLinkClasses: '',
    linkClasses: '',
  };

  const defaultStyle = {
    classes: 'bsds-card',
    titleLinkClasses: 'bsds-link-subtle',
    linkClasses: '',
  };

  const ghostStyle = {
    classes: 'bsds-card-ghost',
    titleLinkClasses: 'bsds-link-ghost',
    linkClasses: 'bsds-link-ghost',
  };

  const borderLightStyle = {
    classes: 'bsds-card-border-light',
    titleLinkClasses: 'bsds-link-subtle',
    linkClasses: '',
  };

  const borderGhostStyle = {
    classes: 'bsds-card-border-ghost',
    titleLinkClasses: 'bsds-link-ghost',
    linkClasses: 'bsds-link-ghost',
  };

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

  const [title, setTitle] = useState<ReactElement>();
  const [style, setStyle] = useState(cardStyles.classes);
  const [clonedImage, setClonedImage] = useState<ReactElement>();
  const [clonedTag, setClonedTag] = useState<ReactElement>();

  useEffect(() => {
    if (linkTitle) {
      setTitle(
        <Link href={linkHref} className={`${cardStyles.titleLinkClasses} ${'link-hitbox'}`}>
          {texts.cardTitle}
        </Link>
      );
    } else {
      setTitle(<>{texts.cardTitle}</>);
    }
  }, [texts.cardTitle, linkHref, cardStyles.titleLinkClasses, linkTitle]);

  useEffect(() => {
    setStyle(decorativeState && actionLink ? `${cardStyles.classes} ${decorativeState}` : cardStyles.classes);
  }, [decorativeState, actionLink, cardStyles.classes]);

  useEffect(() => {
    if (image) {
      setClonedImage(
        cloneElement(image as ReactElement, {
          isGhost: variant === 'ghost' || variant === 'border-ghost',
        })
      );
    }
  }, [image, variant]);

  useEffect(() => {
    if (tag) {
      setClonedTag(
        cloneElement(tag as ReactElement, {
          isGhost: variant === 'ghost' || variant === 'border-ghost',
        })
      );
    }
  }, [tag, variant]);

  const cardContent = (
    <div className="bsds-card-content">
      {clonedTag}
      {!!icon && <Icon name={`${iconName}`} className="bsds-icon-8x" />}
      <HeadingElement headingLevel={headingLevel} className="bsds-card-title" id={'cardTitle' + cardTitleId}>
        {title}
      </HeadingElement>
      <p className="bsds-card-description">{texts?.cardDescription}</p>
      {!!actionLink && (
        <Link href={linkHref} className={`${cardStyles.linkClasses}`}>
          {actionLinkText}
        </Link>
      )}
    </div>
  );

  const cardContentWrapper = (
    <div className={style} data-testid="bsdsCard">
      {cardContent}
    </div>
  );

  if (clonedImage) {
    return (
      <div className="bsds-card-with-image">
        {clonedImage}
        {cardContentWrapper}
      </div>
    );
  }

  return cardContentWrapper;
};

export default ContentCard;
