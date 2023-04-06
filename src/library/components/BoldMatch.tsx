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
            <span key={match + i} className="bsds-font-weight-heavy">
              {match}
            </span>
          );
        } else {
          return <Fragment key={match + i}>{match}</Fragment>;
        }
      })}
    </>
  );
};

export default BoldMatch;
