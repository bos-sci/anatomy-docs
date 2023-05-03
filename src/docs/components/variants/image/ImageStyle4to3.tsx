import Example from '../../../shared/components/Example';
import Image from '../../../../library/components/Image';
import image4to3 from '../../../../assets/images/4to3.jpg';

const ImageStyle4to3 = (): JSX.Element => {
  return (
    <Example>
      <Image
        src={image4to3}
        ratio="4:3"
        alt="A brown tabby cat with yellow eyes and majestic whiskers looming over his abode with a sense of superiority."
      />
    </Example>
  );
};

export default ImageStyle4to3;
