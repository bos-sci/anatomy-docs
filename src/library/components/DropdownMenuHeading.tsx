import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from "react";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const DropdownMenuHeading = forwardRef(({ children, className, ...divAttrs }: Props, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  return <div ref={ref} className={"bsds-dropdown-menu-heading" + (className ? " " + className : "")} {...divAttrs}>{children}</div>
});

DropdownMenuHeading.displayName = 'DropdownMenuHeading';
export default DropdownMenuHeading;