import Card from "../../../../library/components/Card"
import Example from "../../../shared/components/Example"

const WithShadow = (): JSX.Element => {
  return (
    <Example>
      <Card
        texts={{
          cardTitle: "Card title",
          cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum."
        }}
        headingLevel="h4"
        actionLink={true}
        actionLinkText="Call-to-action"
        linkHref="docs-demo-link"
        dropShadow={true}
      />
    </Example>
  )
};

export default WithShadow;