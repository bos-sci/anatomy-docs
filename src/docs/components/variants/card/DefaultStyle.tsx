import Example from "../../../shared/components/Example";
import Card from "../../../../library/components/Card";

const DefaultStyle = (): JSX.Element => {
  return (
    <>
      <Example>
          <Card
            texts={
              {
                cardTitle: "Card title",
                cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."
              }
            }
            linkTitle={false}
            headingLevel="h4"
          />
      </Example>

      <Example isDarkTheme={true}>
          <Card
            texts={
              {
                cardTitle: "Card title",
                cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."
              }
            }
            variant="ghost"
            linkTitle={false}
            headingLevel="h4"
          />
      </Example>
    </>
  );
}

export default DefaultStyle;