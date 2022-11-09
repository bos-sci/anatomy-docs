import Example from "../../../shared/components/Example";
import Card from "../../../../library/components/Card";

const WithLink = (): JSX.Element => {
  return (
    <Example>
      <Card
        texts={{
          cardTitle: "Card title",
          cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."
        }}
        headingLevel="h4"
        linkHref="#"
        actionLink={true}
        actionLinkText="Call-to-action"
      />
    </Example>
  );
}

export default WithLink;