import Example from '../../../shared/components/Example';
import Card from '../../../../library/components/Card';

const DefaultCard = (): JSX.Element => {

  return (
    <Example>
      <Card hasImage={true} imageSrc="https://www.bostonscientific.com/en-US/Home/_jcr_content/root/container/container/container_1729237318/teaser_copy.coreimg.90.1600.jpeg/1660295012015/corp-featured-stories-mental-well-being.jpeg" imageAlt="This is card alt text" cardTitle='This is a card title' />
    </Example>
  );
}

export default DefaultCard;