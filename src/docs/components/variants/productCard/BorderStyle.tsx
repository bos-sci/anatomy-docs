import Example from "../../../shared/components/Example";
import ProductCard from "../../../../library/components/ProductCard";

const BorderStyle = (): JSX.Element => {
  return (
    <>
      <Example>
        <ProductCard
          texts={{title: "Product card title",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."}}
          headingLevel="h4"
          linkTo="docs-demo-link"
          variant="border-light"
        />
      </Example>
      <Example isDarkTheme>
        <ProductCard
          texts={{title: "Product card title",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."}}
          headingLevel="h4"
          linkTo="docs-demo-link"
          variant="border-ghost"
        />
      </Example>
    </>
  );
}

export default BorderStyle;