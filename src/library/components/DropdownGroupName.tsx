import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from "react";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const DropdownGroupName = forwardRef(({ children, className, ...divAttrs }: Props, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  return <div ref={ref} className={"bsds-dropdown-group-name" + (className ? " " + className : "")} {...divAttrs}>{children}</div>
});

DropdownGroupName.displayName = 'DropdownGroupName';
export default DropdownGroupName;