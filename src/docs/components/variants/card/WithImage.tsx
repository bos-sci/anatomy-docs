import Example from "../../../shared/components/Example";
import Card from "../../../../library/components/Card";
import Image from "../../../../library/components/Image";
import image16to9 from "../../../../assets/images/16to9.jpg"

const WithImage = (): JSX.Element => {
  return (
    <Example>
      <Card
        texts={{
          cardTitle: "Card title",
          cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."
        }}
        headingLevel="h4"
        image={<Image
          src={image16to9}
          isDecorative />}
      />
    </Example>
  );
}

export default WithImage;