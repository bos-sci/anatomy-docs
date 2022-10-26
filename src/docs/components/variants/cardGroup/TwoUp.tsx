import Example from "../../../shared/components/Example";
import CardGroup from "../../../../library/components/CardGroup";

const TwoUp = (): JSX.Element => {
  return (
    <Example>
      <CardGroup cardLayout="2up">
        <div className="docs-wire-card">
          Card 1
        </div>
        <div className="docs-wire-card">
          Card 2
        </div>
      </CardGroup>
    </Example>
  );
}

export default TwoUp;