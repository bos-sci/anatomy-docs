// TODO: ADS-377 concatenate "Skip to" + destination or rely on end users to add that correctly

interface Props {
  destinationId: string;
  destination: string;
}

const SkipLink = (props: Props): JSX.Element => {
  return <a href={`#${props.destinationId}`} className="bsds-skip-link">{`Skip to ${props.destination}`}</a>;
};

export default SkipLink;
