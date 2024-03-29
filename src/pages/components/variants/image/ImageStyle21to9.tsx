import Example from 'shared/components/Example';
import { Image } from '@boston-scientific/anatomy-react';
import image21to9 from 'assets/images/21to9.jpg';

const ImageStyle21to9 = (): JSX.Element => {
  return (
    <Example>
      <Image
        src={image21to9}
        ratio="21:9"
        alt="A mackerel tabby cat with yellow eyes and a red-tile nose eagerly trying to use a computer keyboard from underneath his owner's arm."
      />
    </Example>
  );
};

export default ImageStyle21to9;
