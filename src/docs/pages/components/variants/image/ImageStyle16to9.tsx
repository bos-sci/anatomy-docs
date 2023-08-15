import Example from 'docs/shared/components/Example';
import Image from 'library/components/Image';
import image16to9 from 'docs/assets/images/16to9.jpg';

const ImageStyle16to9 = (): JSX.Element => {
  return (
    <Example>
      <Image
        src={image16to9}
        ratio="16:9"
        alt="A perfect pitbull puppy with baby blue eyes, a black nose, a white horn-shaped marking on his face, and a very curious ear, laying on a black couch with his front paws crossed."
      />
    </Example>
  );
};

export default ImageStyle16to9;
