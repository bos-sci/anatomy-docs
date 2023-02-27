import Example from "../../../shared/components/Example";
import ProductCard from "../../../../library/components/ProductCard";
import Image from "../../../../library/components/Image";
import image1to1 from "../../../../assets/images/1to1.jpg"

const WithImage = (): JSX.Element => {
  return (
    <Example>
      <ProductCard
        texts={{title: "Product card title",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."}}
        headingLevel="h4"
        linkTo="docs-demo-link"
        image={<Image src={image1to1} alt="All product images require alt text"/>}
      />
    </Example>
  );
}

export default WithImage;