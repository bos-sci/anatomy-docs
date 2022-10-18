import Example from "../../../shared/components/Example";
import Card from "../../../../library/components/Card";
import CardGroup from "../../../../library/components/CardGroup";

const DefaultCard = (): JSX.Element => {

  return (
      <Example>
        <CardGroup>
          <Card
            texts={{
              cardTitle: "Default card title",
              cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."
            }}
            linkTitle={false} 
            headingLevel="h2"
          /> 
        </CardGroup>
      </Example>
  );
}

export default DefaultCard;