import { VariantProps } from "../Preview";
import DefaultCard from "./DefaultCard";
import WithLink from "./WithLink";
import WithLinkedTitle from "./WithLinkedTitle";
import WithTag from "./WithTag";
import WithIcon from "./WithIcon";
import DefaultStyle from "./DefaultStyle";
import BorderStyle from "./BorderStyle";
import WithShadow from "./WithShadow";
import WithGradient from "./WithGradient";

const CardController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case "withLink":
      return <WithLink />;
    case "withLinkedTitle":
      return <WithLinkedTitle />;
    case "withTag":
      return <WithTag />;
    case "withIcon":
      return <WithIcon />;
    // Styles
    case "defaultCardStyle":
      return <DefaultStyle />;
    case "borderStyleCard":
      return <BorderStyle />;
    case "withShadow":
      return <WithShadow />;
    case "withGradient":
      return <WithGradient />;

    default:
      return <DefaultCard />;
    }
}

export default CardController;