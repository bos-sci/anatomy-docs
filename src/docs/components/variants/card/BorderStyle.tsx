import Example from "../../../shared/components/Example";
import Card from "../../../../library/components/Card";
import CardGroup from "../../../../library/components/CardGroup";

const BorderStyle = (): JSX.Element => {
  return (
    <>
      <Example>
        <CardGroup>
          <Card
            texts={{
              cardTitle: "Card title",
              cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."
            }}
            linkTitle={false}
            variant="border-light"
            headingLevel="h4"
          />
        </CardGroup>
      </Example>

      <Example isDarkTheme={true}>
        <CardGroup>
          <Card
            texts={{
              cardTitle: "Card title",
              cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."
            }}
            variant="border-ghost"
            linkTitle={false}
            headingLevel="h4"
          />
        </CardGroup>
      </Example>
    </>
  );
}

export default BorderStyle;