import Example from "../../../shared/components/Example";
import Image from "../../../../library/components/Image";

const DefaultImage = (): JSX.Element => {
  return (
    <Example>
      <Image src="src/assets/images/16to9.jpg" texts={{alt: "Alt text for image."}} />
    </Example>
  );
}

export default DefaultImage;