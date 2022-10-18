import Example from "../../../shared/components/Example";
import Card from "../../../../library/components/Card";
import CardGroup from "../../../../library/components/CardGroup";

const DefaultStyle = (): JSX.Element => {

  return (
    <>
      <Example>
        <CardGroup>
          <Card
            texts={{
              cardTitle: "Default card style",
              cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."
            }}
            linkTitle={false} 
            headingLevel="h4"
          /> 
        </CardGroup>
      </Example>

      <Example isDarkTheme={true}>
        <CardGroup>
          <Card
            texts={{
              cardTitle: "Default ghost card style",
              cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."
            }}
            variant="ghost"
            linkTitle={false} 
            headingLevel="h4"
          /> 
        </CardGroup>
      </Example>
    </>
  );
}

export default DefaultStyle;