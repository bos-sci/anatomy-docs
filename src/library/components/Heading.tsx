import React from 'react';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const HeadingElement = ({ headingLevel = "h2", children, className }: Props) => {

  const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(headingLevel, props, children)

  return (
    <Heading className={className}>
      {children}
    </Heading>
  )
}

export default HeadingElement;