// TODO:
// make all panels collapsed on page load & allow multiple panels to be expanded at the same time
// finish refactoring

// NOTE:
// We could consider using <details> here
// The current implementation is based on the example from aria practices
// We did not include role="region" aria-labelledby="titleId" (optional) because we will likely have 6+ panels
//   https://www.w3.org/TR/wai-aria-practices-1.1/#accordion
//   https://www.w3.org/TR/wai-aria-practices-1.1/#wai-aria-roles-states-and-properties
//   https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html

import { createRef, ReactElement, RefObject, useEffect, useState } from 'react';
import HeadingElement from './Heading';
import AccordionHeading from './AccordionHeading';

type Props = {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactElement[] | ReactElement;
}

let accordionId = 0;

const Accordion = ({ headingLevel = "h2", children }: Props): JSX.Element => {

  const [expandedPanels, setExpandedPanels] = useState(new Set<number>());
  const [accordionPanelId, setAccordionPanelId] = useState('');
  const [accordionPanels, setAccordionPanels] = useState<ReactElement[]>([]);
  const [accordionRefs, setAccordionRefs] = useState<RefObject<HTMLButtonElement>[]>([]);

  const togglePanel = (index: number) => {
    const newPanels = new Set<number>([...expandedPanels]);
    newPanels.has(index) ? newPanels.delete(index) : newPanels.add(index);
    setExpandedPanels(newPanels);
  }

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
    <div className="bsds-accordion">
      {accordionPanels.map((accordionPanel, index) => (
        <>
          <HeadingElement headingLevel={headingLevel} className="bsds-accordion-heading">
            <AccordionHeading
              key={`${accordionPanelId + index}Heading`}
              accordionHeading={accordionPanel.props.accordionHeading}
              index={index}
              togglePanel={togglePanel}
              isPanelExpanded={expandedPanels.has(index)}
              accordionPanelId={accordionPanelId + index}
              accordionRef={accordionRefs[index]}
            />
          </HeadingElement>
          <div
            key={accordionPanelId + index}
            id={accordionPanelId + index}
            className="bsds-accordion-panel"
            hidden={!expandedPanels.has(index)}
          >
            { accordionPanel }
          </div>
        </>
      ))}
    </div>
  )
}

export default Accordion;