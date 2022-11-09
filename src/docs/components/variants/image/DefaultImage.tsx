import Example from "../../../shared/components/Example";
import Image from "../../../../library/components/Image";
import image16to9 from "../../../../assets/images/16to9.jpg"

const DefaultImage = (): JSX.Element => {
  return (
    <Example>
      <Image src={image16to9} isDecorative />
    </Example>
  );
}

export default DefaultImage;