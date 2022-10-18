import Example from "../../../shared/components/Example";
import Card from "../../../../library/components/Card";
import CardGroup from "../../../../library/components/CardGroup";
import Tag from "../../../../library/components/Tag";

const WithTag = (): JSX.Element => {
  return (
    <Example>
      <CardGroup>
        <Card
          texts={{
            cardTitle: "Card with tag",
            cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum." 
          }}
          headingLevel="h4"
          tag={<Tag>Default Tag</Tag>}
          tagStyle='default'
        />
      </CardGroup>
    </Example>
  );
}

export default WithTag;
