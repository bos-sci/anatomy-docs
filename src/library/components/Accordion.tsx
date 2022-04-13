// TODO: make all panels collapsed on page load, allow multiple panels to be expanded at the same time

// NOTE:
// We could consider using <details> here
// The current implementation is based on the example from aria practices
// We did not include role="region" aria-labelledby="titleId" (optional) because we will likely have 6+ panels
//   https://www.w3.org/TR/wai-aria-practices-1.1/#accordion
//   https://www.w3.org/TR/wai-aria-practices-1.1/#wai-aria-roles-states-and-properties
//   https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html

import { createRef, ReactElement, RefObject, useEffect, useState } from 'react';
import AccordionHeading from './AccordionHeading';

type Props = {
  children: ReactElement[] | ReactElement;
}

let accordionId = 0;

const Accordion = ({ children }: Props): JSX.Element => {

  const [expandedPanel, setExpandedPanel] = useState(0);
  const [accordionPanelId, setAccordionPanelId] = useState('');
  const [accordionPanels, setAccordionPanels] = useState<ReactElement[]>([]);
  const [accordionRefs, setAccordionRefs] = useState<RefObject<HTMLButtonElement>[]>([]);

  useEffect(() => {
    const idNum = ++accordionId;
    setAccordionPanelId('accordionPanel' + idNum);
  }, []);

  useEffect(() => {
    if (Array.isArray(children)) {
      setAccordionPanels(children);
    } else {
      setAccordionPanels([children]);
    }
    let refs: RefObject<HTMLButtonElement>[] = [];
    for (let i = 0; i < accordionPanels.length; i++) {
      refs.push(createRef());
    }
    setAccordionRefs(refs);
  }, [children, accordionPanels.length]);

  return (
    <div className="ads-accordion">
      {accordionPanels.map((accordionPanel, index) => (
        <>
          <AccordionHeading
            key={`${accordionPanelId + index}Heading`}
            accordionHeading={accordionPanel.props.accordionHeading}
            index={index}
            setExpandedPanel={setExpandedPanel}
            isActive={index === expandedPanel}
            accordionPanelId={accordionPanelId + index}
            accordionRef={accordionRefs[index]}
          />
          <div
            key={accordionPanelId + index}
            id={accordionPanelId + index}
            className="ads-accordion-panel"
            hidden={index !== expandedPanel}
          >
            { accordionPanel }
          </div>
        </>
      ))}
    </div>
  )
}

export default Accordion;