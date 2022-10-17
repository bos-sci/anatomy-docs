import Example from "../../../shared/components/Example";
import Card from "../../../../library/components/Card";
import CardGroup from "../../../../library/components/CardGroup";

const WithLinkedTitle = (): JSX.Element => {

  return (
      <Example>
        <CardGroup>
          <Card
            texts={{
              cardTitle: "Card title",
              cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."
            }} 
            linkTitle={true}
            headingLevel="h4"
            linkHref="#"
          /> 
        </CardGroup>
      </Example>
  );
}

export default WithLinkedTitle;