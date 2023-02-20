import { VariantProps } from "../Preview";
import DefaultProductCard from "./DefaultProductCard";

const ProductCardController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers

    default:
      return <DefaultProductCard />;
    }
}

export default ProductCardController;