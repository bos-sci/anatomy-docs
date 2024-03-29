import Example from 'shared/components/Example';
import { Image } from '@boston-scientific/anatomy-react';
import image1to1 from 'assets/images/1to1.jpg';

const ImageStyle1to1 = (): JSX.Element => {
  return (
    <Example>
      <Image
        src={image1to1}
        ratio="1:1"
        alt="A very cute grey pitbull with brown eyes, a black nose, a white horn-shaped marking on his face, and a very curious ear, wearing his buffalo plaid hoodie."
      />
    </Example>
  );
};

export default ImageStyle1to1;
