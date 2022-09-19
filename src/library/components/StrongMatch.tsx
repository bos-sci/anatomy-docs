import { ReactNode, useState, useEffect } from 'react';

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
    {matchArray.map(match => {
      if (match.toLowerCase() === props.match.toLowerCase()) {
        return <strong>{match}</strong>;
      } else {
        return <>{match}</>;
      }
    })}
  </>;
}

export default StrongMatch;