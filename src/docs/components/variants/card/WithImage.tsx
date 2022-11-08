import Example from "../../../shared/components/Example";
import Card from "../../../../library/components/Card";
import ImageElement from "../../../../library/components/Image";

const WithImage = (): JSX.Element => {
  return (
    <Example>
      <Card
        texts={{
          cardTitle: "Card title",
          cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."
        }}
        headingLevel="h4"
        image={<ImageElement imageSrc="https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" isDecorative imageRatio="even-split"/>}
      />
    </Example>
  );
}

export default WithImage;