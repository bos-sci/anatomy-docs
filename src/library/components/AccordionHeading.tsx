// TODO: finish refactoring

import { RefObject, useCallback } from 'react';
import IconChevronDown from "./icon/icons/IconChevronDown";

interface Props {
  accordionHeading: string;
  index: number;
  setIsPanelExpanded: (index: number) => void;
  isPanelExpanded?: boolean;
  accordionPanelId: string;
  accordionRef: RefObject<HTMLButtonElement>;
}

const AccordionHeading = ({ accordionHeading, setIsPanelExpanded, index, isPanelExpanded, accordionPanelId, accordionRef }: Props): JSX.Element => {

  const onClick = useCallback(() => {
    setIsPanelExpanded(index)
  }, [setIsPanelExpanded, index])

  return (
    <button
      ref={accordionRef}
      id={`${accordionPanelId}Heading`}
      className="lib-accordion-trigger"
      aria-controls={accordionPanelId}
      aria-expanded={isPanelExpanded}
      onClick={onClick}
      // onClick={() => setIsPanelExpanded(index)}
    >
      <span className="lib-accordion-trigger-text">
        { accordionHeading }
      </span>
      <IconChevronDown />
    </button>
  )
}

export default AccordionHeading;