import Example from "../../../shared/components/Example";
import Image from "../../../../library/components/Image";
import image4to3 from "../../../../assets/images/4to3.jpg"

const ImageStyle4to3 = (): JSX.Element => {
  return (
    <Example>
      <Image src={image4to3} ratio="4:3" texts={{alt: "A brown tabby cat surveying his abode from a high vantage point, he has light-colored whiskers and dark eyebrows."}} />
    </Example>
  );
}

export default ImageStyle4to3;