// TODO:
// make heading level configurable
// make option to collapse/expand on load

import { RefObject, useCallback } from 'react';
import IconChevronDown from "../../library/components/icon/icons/IconChevronDown";

interface Props {
  accordionTitle: string;
  index: number;
  setExpandedPanel: (index: number) => void;
  isActive?: boolean;
  accordionPanelId: string;
  accordionRef: RefObject<HTMLButtonElement>;
}

const AccordionTitle = ({ accordionTitle, setExpandedPanel, index, isActive, accordionPanelId, accordionRef }: Props): JSX.Element => {

  const onClick = useCallback(() => {
    setExpandedPanel(index)
  }, [setExpandedPanel, index])

  return (
    <h3 className="ads-accordion-title">
      <button
        ref={accordionRef}
        id={`${accordionPanelId}Title`}
        className="ads-accordion-trigger"
        aria-controls={accordionPanelId}
        aria-expanded={isActive}
        onClick={onClick}
      >
        <span className="ads-accordion-trigger-text">
          { accordionTitle }
        </span>
        <IconChevronDown />
      </button>
    </h3>
  )
}

export default AccordionTitle;