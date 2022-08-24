// TODO: finish refactoring

import { RefObject } from 'react';
import IconChevronDown from "./icon/icons/IconChevronDown";

interface Props {
  heading: string;
  index: number;
  togglePanel: (index: number) => void;
  isPanelExpanded?: boolean;
  panelId: string;
  accordionRef: RefObject<HTMLButtonElement>;
}

const AccordionHeading = ({ heading, togglePanel, index, isPanelExpanded, panelId, accordionRef }: Props): JSX.Element => {
  return (
    <button
      ref={accordionRef}
      id={`${panelId}Heading`}
      className="bsds-accordion-trigger"
      aria-controls={panelId}
      aria-expanded={isPanelExpanded}
      onClick={() => togglePanel(index)}
    >
      <span className="bsds-accordion-trigger-text">
        { heading }
      </span>
      <IconChevronDown />
    </button>
  )
}

export default AccordionHeading;