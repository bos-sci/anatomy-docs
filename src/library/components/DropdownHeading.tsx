import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from "react";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const DropdownHeading = forwardRef(({ children, className, ...divAttrs }: Props, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  return <div ref={ref} className={"bsds-dropdown-menu-heading" + (className ? " " + className : "")} {...divAttrs}>{children}</div>
});

DropdownHeading.displayName = 'DropdownHeading';
export default DropdownHeading;