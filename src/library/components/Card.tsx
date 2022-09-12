import Link from "./Link";
import Tag from "./Tag";

interface Props {
  hasImage?: boolean,
  imageSrc?: string,
  imageAlt?: string,
  cardTitle?: string,
}

const Card = (props: Props): JSX.Element => {
    return (
        <div className="bsds-card">
            <img className="bsds-card-image" src={props.imageSrc} alt={props.imageAlt}/>

            <div className="bsds-card-body">
                <h2>{props.cardTitle}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
}

export default Card;