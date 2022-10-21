import { ReactNode } from "react"

interface Props {
  children: ReactNode,
  cardLayout?: string;
}

const CardGroup = ({children, cardLayout}: Props): JSX.Element => {

let gridLayout = "";
switch(cardLayout) {
  case "2up":
    gridLayout = "-2up";
    break;
  case "3up":
    gridLayout = "-3up";
    break;
  case "4up":
    gridLayout = "-4up";
    break;
}

  return (
    <div className={`${"bsds-card-group"}${gridLayout}`}>
      {children}
    </div>
  )
}

export default CardGroup;