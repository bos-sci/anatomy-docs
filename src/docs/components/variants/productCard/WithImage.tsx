import Example from "../../../shared/components/Example";
import ProductCard from "../../../../library/components/ProductCard";
import Image from "../../../../library/components/Image";
import image5050 from "../../../../assets/images/50-50-split.jpg"
import image1to1 from "../../../../assets/images/1to1.jpg"

const WithImage = (): JSX.Element => {
  return (
    <>
      <Example>
        <ProductCard
          texts={{title: "Product card title",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."}}
          headingLevel="h4"
          linkTo="docs-demo-link"
          image={<Image ratio="50:50" src={image5050} alt="Abstract splash painting in a variety of blue and pink colors."/>}
        />
      </Example>
      <Example>
        <ProductCard
          texts={{title: "Product card title",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."}}
          headingLevel="h4"
          linkTo="docs-demo-link"
          image={<Image ratio="1:1" src={image1to1} alt="A very cute grey pitbull with brown eyes, a black nose, a white horn-shaped marking on his face, and a very curious ear, wearing his buffalo plaid hoodie."/>}
        />
      </Example>
    </>

  );
}

export default WithImage;