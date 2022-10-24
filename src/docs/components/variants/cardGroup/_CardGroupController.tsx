import { VariantProps } from "../Preview";
import TwoUp from "./TwoUp";
import ThreeUp from "./ThreeUp";
import FourUp from "./FourUp";

const CardGroupController =({ variantId }: VariantProps) : JSX.Element => {
  switch (variantId) {
    // Styles
    case "2up":
      return <TwoUp />;
    case "3up":
      return <ThreeUp />;
    case "4up":
      return <FourUp />;

    default:
      return <TwoUp />;
  }
}

export default CardGroupController;