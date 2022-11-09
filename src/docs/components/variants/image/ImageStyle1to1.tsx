import Example from "../../../shared/components/Example";
import Image from "../../../../library/components/Image";
import image1to1 from "../../../../assets/images/1to1.jpg"

const ImageStyle1to1 = (): JSX.Element => {
  return (
    <Example>
      <Image src={image1to1} ratio="1:1" texts={{alt: "A gray dog with white face marking and a curious left ear wearing a red plaid hoodie. He is posing for his annual holiday photo."}} />
    </Example>
  );
}

export default ImageStyle1to1;