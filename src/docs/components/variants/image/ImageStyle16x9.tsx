import Example from "../../../shared/components/Example";
import ImageElement from "../../../../library/components/Image";

const ImageStyle16x9 = (): JSX.Element => {
  return (
    <Example>
      <ImageElement imageSrc="https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" imageRatio="16x9" isDecorative />
    </Example>
  );
}

export default ImageStyle16x9;