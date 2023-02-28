import Example from "../../../shared/components/Example";
import ProductCard from "../../../../library/components/ProductCard";
import Image from "../../../../library/components/Image";
import image16to9 from "../../../../assets/images/16to9.jpg"

const WithImage = (): JSX.Element => {
  return (
    <Example>
      <ProductCard
        texts={{title: "Product card title",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."}}
        headingLevel="h4"
        linkTo="docs-demo-link"
        image={<Image ratio="even-split" src={image16to9} alt="All product images require alt text"/>}
        variant="border-light"
      />
    </Example>
  );
}

export default WithImage;