import Card from "../../../../library/components/Card"
import CardGroup from "../../../../library/components/CardGroup"
import Example from "../../../shared/components/Example"

const WithBrandGradient = (): JSX.Element => {
  return (
    <Example>
      <CardGroup cardLayout="2up">
        <Card
          texts={{
            cardTitle: "Card title",
            cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."
          }}
          headingLevel="h4"
          actionLink={true}
          linkActionText="Default link"
          linkHref="#"
          dropShadow={true}
       />
       <Card
          texts={{
            cardTitle: "Card title",
            cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."
          }}
          headingLevel="h4"
          actionLink={true}
          linkActionText="Default link"
          linkHref="#"
          brandGradient={true}
       />
      </CardGroup>
    </Example>
  )
};

export default WithBrandGradient;