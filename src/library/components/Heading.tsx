import React from 'react';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const HeadingElement = ({ headingLevel = "h2", children, ...attrs }: Props) => {
  return React.createElement(headingLevel, attrs, children);
}

export default HeadingElement;