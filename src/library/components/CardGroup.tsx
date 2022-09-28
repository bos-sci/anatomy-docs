import { ReactNode } from "react"

interface Props {
  children: ReactNode,
  cardLayout: '2up' | '3up' | '4up'
}

const CardGroup = ({children, cardLayout}: Props): JSX.Element => {
  return (
    <div className="bsds-card-group">
      {children}
    </div>
  )
}

export default CardGroup;