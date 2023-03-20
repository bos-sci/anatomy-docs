import Example from "../../../shared/components/Example";
import ProductCard from "../../../../library/components/ProductCard";

const NonSemanticCardTitle = (): JSX.Element => {
  return (
    <Example>
      <ProductCard
        texts={
          {
            title: "Product card title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."
          }
        }
        linkTo="docs-demo-link"
      />
    </Example>
  );
}

export default NonSemanticCardTitle;