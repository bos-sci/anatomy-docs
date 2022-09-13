import { ReactNode } from "react";
import Link from "./Link";
import Tag from "./Tag";

interface Props {
  children?: ReactNode,
  hasImage?: boolean,
  imageSrc?: string,
  imageAlt?: string,
  cardTitle?: string,
  cardDescription?: string
}

const Card = ({children, hasImage, imageSrc, imageAlt, cardTitle, cardDescription}: Props): JSX.Element => {
    return (
        <div className="bsds-card">
            <img className="bsds-card-image" src={imageSrc} alt={imageAlt}/>
            <div className="bsds-card-body">
                <h2>{cardTitle}</h2>
                <p>{cardDescription}</p>
            </div>
        </div>
    )
}

export default Card;