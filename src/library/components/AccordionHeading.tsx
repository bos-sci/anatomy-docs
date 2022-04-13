import { RefObject, useCallback } from 'react';
import IconChevronDown from "./icon/icons/IconChevronDown";

interface Props {
  accordionHeading: string;
  index: number;
  setExpandedPanel: (index: number) => void;
  isActive?: boolean;
  accordionPanelId: string;
  accordionRef: RefObject<HTMLButtonElement>;
}

const AccordionHeading = ({ accordionHeading, setExpandedPanel, index, isActive, accordionPanelId, accordionRef }: Props): JSX.Element => {

  const onClick = useCallback(() => {
    setExpandedPanel(index)
  }, [setExpandedPanel, index])

  return (
    <button
      ref={accordionRef}
      id={`${accordionPanelId}Heading`}
      className="ads-accordion-trigger"
      aria-controls={accordionPanelId}
      aria-expanded={isActive}
      onClick={onClick}
    >
      <span className="ads-accordion-trigger-text">
        { accordionHeading }
      </span>
      <IconChevronDown />
    </button>
  )
}

export default AccordionHeading;