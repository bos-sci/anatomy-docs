import { OptionHTMLAttributes, ReactNode } from 'react';

interface Props extends OptionHTMLAttributes<HTMLOptionElement> {
  children?: ReactNode;
}

const Option = ({ children, ...optionAttrs }: Props): JSX.Element => {
  return <option {...optionAttrs}>{children}</option>;
};
Option.displayName = 'Option';
export default Option;
