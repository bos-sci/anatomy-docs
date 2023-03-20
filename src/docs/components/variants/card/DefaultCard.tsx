import Example from "../../../shared/components/Example";
import Card from "../../../../library/components/Card";

const DefaultCard = (): JSX.Element => {
  return (
    <Example>
      <Card
        texts={
          {
            cardTitle: "Card title",
            cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."
          }
        }
        linkTitle={false}
        headingLevel="h2"
      />
    </Example>
  );
}

export default DefaultCard;