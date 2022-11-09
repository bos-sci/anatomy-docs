import Example from "../../../shared/components/Example";
import Image from "../../../../library/components/Image";
import image16to9 from "../../../../assets/images/16to9.jpg"

const WithCaption = (): JSX.Element => {
  return (
    <>
      <Example>
        <Image src={image16to9} isDecorative hasCaption texts={{caption: "This is an image caption."}} />
      </Example>
      <Example isDarkTheme>
        <Image src={image16to9} isDecorative hasCaption isGhost texts={{caption: "This is an image caption."}} />
      </Example>
    </>
  );
}

export default WithCaption;