import { ReactNode } from "react";
import Link from "./Link";
import Tag from "./Tag";

interface Props {
  children: ReactNode,
}

const Card = (props: Props): JSX.Element => {
    return (
        <div className="card">
            <img className="card-image" src="" alt=""/>
            <h2 className="card-title">Hello card</h2>

            <div className="card-body">

            </div>
        </div>
    )
}


export default Card;