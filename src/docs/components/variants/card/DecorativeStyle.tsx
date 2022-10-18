import Card from "../../../../library/components/Card"
import CardGroup from "../../../../library/components/CardGroup"
import Example from "../../../shared/components/Example"

const DecorativeStyle = (): JSX.Element => {
  return (
    <Example>
      <CardGroup cardLayout="2up">
        <Card
          texts={{
            cardTitle: "Card with shadow",
            cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."
          }}
          headingLevel="h4"
          actionLink={true}
          actionLinkText="Default link"
          linkHref="#"
          dropShadow={true}
       />
       <Card
          texts={{
            cardTitle: "Card with brand gradient",
            cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."
          }}
          headingLevel="h4"
          actionLink={true}
          actionLinkText="Default link"
          linkHref="#"
          gradientBrand={true}
       />
      </CardGroup>
    </Example>
  )
};

export default DecorativeStyle;