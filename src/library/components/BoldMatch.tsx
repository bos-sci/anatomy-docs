import { ReactNode, useState, useEffect, Fragment } from 'react';

interface Props {
  match: string;
  children: ReactNode;
}

const BoldMatch = (props: Props): JSX.Element => {
  const [matchArray, setMatchArray] = useState<string[]>([]);

  useEffect(() => {
    if (props.children) {
      const regex = new RegExp(`(${props.match})`, 'gi');
      const matches = props.children.toString().split(regex);
      setMatchArray(matches);
    }
  }, [props]);

  return (
    <>
      {matchArray.map((match, i) => {
        if (match.toLowerCase() === props.match.toLowerCase()) {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <span key={'key' + match + i} className="bsds-font-weight-heavy">
              {match}
            </span>
          );
        } else {
          // eslint-disable-next-line react/no-array-index-key
          return <Fragment key={'key' + match + i}>{match}</Fragment>;
        }
      })}
    </>
  );
};

export default BoldMatch;
