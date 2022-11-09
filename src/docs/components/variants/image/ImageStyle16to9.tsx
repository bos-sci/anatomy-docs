import Example from "../../../shared/components/Example";
import Image from "../../../../library/components/Image";
import image16to9 from "../../../../assets/images/16to9.jpg"

const ImageStyle16to9 = (): JSX.Element => {
  return (
    <Example>
      <Image src={image16to9} ratio="16:9" texts={{alt: "A gray puppy with white face and chest markings laying on a couch with his baby paws gathered together."}} />
    </Example>
  );
}

export default ImageStyle16to9;