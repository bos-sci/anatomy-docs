import Example from "../../../shared/components/Example";
import CardGroup from "../../../../library/components/CardGroup";

const ThreeUp = (): JSX.Element => {
  return (
    <Example>
      <CardGroup cardLayout="3up">
        <div className="docs-wire-card">
          Card
        </div>
        <div className="docs-wire-card">
          Card
        </div>
        <div className="docs-wire-card">
          Card
        </div>
      </CardGroup>
    </Example>
  );
}

export default ThreeUp;