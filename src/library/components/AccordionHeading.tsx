// TODO: finish refactoring

import { RefObject } from 'react';
import IconChevronDown from "./icon/icons/IconChevronDown";

interface Props {
  accordionHeading: string;
  index: number;
  togglePanel: (index: number) => void;
  isPanelExpanded?: boolean;
  accordionPanelId: string;
  accordionRef: RefObject<HTMLButtonElement>;
}

const AccordionHeading = ({ accordionHeading, togglePanel, index, isPanelExpanded, accordionPanelId, accordionRef }: Props): JSX.Element => {
  return (
    <button
      ref={accordionRef}
      id={`${accordionPanelId}Heading`}
      className="bsds-accordion-trigger"
      aria-controls={accordionPanelId}
      aria-expanded={isPanelExpanded}
      onClick={() => togglePanel(index)}
    >
      <span className="bsds-accordion-trigger-text">
        { accordionHeading }
      </span>
      <IconChevronDown />
    </button>
  )
}

export default AccordionHeading;