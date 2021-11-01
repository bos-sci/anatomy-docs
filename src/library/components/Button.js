const Button = (props) => {
  const { variant, ...buttonAttrs } = props;

  let variantClass = '';
  switch (variant) {
    case 'assertive':
      variantClass = 'ads-cta-assertive'
      break;
    case 'ghost':
      variantClass = 'ads-cta-ghost'
      break;
    default:
      variantClass = '';
      break;
  }

  return (
    <button className={`ads-cta ${variantClass}`} {...buttonAttrs}>{props.children}</button>
  );
}

export default Button;