import Example from "../../../shared/components/Example";
import CardGroup from "../../../../library/components/CardGroup";

const FourUp = (): JSX.Element => {
  return (
    <Example>
      <CardGroup cardLayout="4up">
        <div className="docs-wire-card">
          Card 1
        </div>
        <div className="docs-wire-card">
          Card 2
        </div>
        <div className="docs-wire-card">
          Card 3
        </div>
        <div className="docs-wire-card">
          Card 4
        </div>
      </CardGroup>
    </Example>
  );
}

export default FourUp;