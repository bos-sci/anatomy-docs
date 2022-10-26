import { ReactElement } from "react";
import {Props as CardProps} from "./Card";

interface Props {
  children: ReactElement<CardProps> | ReactElement<CardProps>[],
  cardLayout?: "twoUp" | "threeUp" | "fourUp";
}

const CardGroup = ({children, cardLayout = "twoUp"}: Props): JSX.Element => {

  let gridLayout = "";
  switch(cardLayout) {
    case "twoUp":
      gridLayout = "-twoUp";
      break;
    case "threeUp":
      gridLayout = "-threeUp";
      break;
    case "fourUp":
      gridLayout = "-fourUp";
      break;
  }

  return (
    <div className={`${"bsds-card-group"}${gridLayout}`} data-testid="bsdsCardGroup">
      {children}
    </div>
  )
}

export default CardGroup;