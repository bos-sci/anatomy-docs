import Example from "../../../shared/components/Example";
import Card from "../../../../library/components/Card";

const WithLinkedTitle = (): JSX.Element => {
  return (
    <Example>
      <Card
        texts={{
          cardTitle: "Linked card title",
          cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."
        }}
        linkTitle={true}
        headingLevel="h4"
        linkHref="docs-demo-link"
      />
    </Example>
  );
}

export default WithLinkedTitle;