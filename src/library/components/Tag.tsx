import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: string;
}

const Tag = ({ variant, children }: Props): JSX.Element => {
  return (
    <p className={variant ? `ads-tag-${variant}` : "ads-tag"}>{children}</p>
  );
};

export default Tag;
