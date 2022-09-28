import { ReactNode, useState, useEffect, Fragment } from 'react';

interface Props {
  match: string;
  children: ReactNode;
}

const StrongMatch = (props: Props): JSX.Element => {
  const [matchArray, setMatchArray] = useState<string[]>([]);

  useEffect(() => {
    if (props.children) {
      const regex = new RegExp(`(${props.match})`, 'gi');
      const matches = props.children.toString().split(regex);
      setMatchArray(matches);
    }
  }, [props]);

  return <>
    {matchArray.map((match, i) => {
      if (match.toLowerCase() === props.match.toLowerCase()) {
        return <strong key={match + i}>{match}</strong>;
      } else {
        return <Fragment key={match + i}>{match}</Fragment>;
      }
    })}
  </>;
}

export default StrongMatch;