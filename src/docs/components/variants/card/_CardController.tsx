import { VariantProps } from "../Preview";
import DefaultCard from "./DefaultCard";
import WithLinkedTitle from "./WithLinkedTitle";
import WithLinkOrAction from "./WithLinkOrAction";
import WithTag from "./WithTag";
import WithIcon from "./WithIcon";
import DefaultStyle from "./DefaultStyle";
import BorderStyle from "./BorderStyle";
import DecorativeStyle from "./DecorativeStyle";

const CardController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case "withLinkedTitle":
      return <WithLinkedTitle />;
    case "withLinkOrAction":
      return <WithLinkOrAction />;
    case "withTag":
      return <WithTag />;
    case "withIcon":
      return <WithIcon />;
        
    // Styles  
    case "defaultCardStyle":
      return <DefaultStyle />;
    case "borderStyleCard":
      return <BorderStyle />;
    case "withDecorativeTreatment":
      return <DecorativeStyle />;
      
    default:
      return <DefaultCard />;
    }
}

export default CardController;