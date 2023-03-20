import Example from "../../../shared/components/Example";
import Card from "../../../../library/components/Card";

const WithIcon = (): JSX.Element => {
  return (
    <Example>
      <Card
        texts={
          {
            cardTitle: "Card title",
            cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."
          }
        }
        headingLevel="h4"
        icon={true}
        iconName="demoCardIcon"
      />
    </Example>
  )
};

export default WithIcon;