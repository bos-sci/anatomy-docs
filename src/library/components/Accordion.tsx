// TODO: consider swapping to details & summary elements
// this implementation is based on the example from aria practices
// https://www.w3.org/TR/wai-aria-practices-1.1/#accordion
// https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html

import { createRef, ReactElement, RefObject, useEffect, useState } from 'react';
import AccordionTitle from './AccordionTitle';

type Props = {
  children: ReactElement[] | ReactElement;
}

let accordionId = 0;

const Accordion = ({ children }: Props): JSX.Element => {

  const [expandedPanel, setExpandedPanel] = useState(0);
  const [accordionPanelId, setAccordionPanelId] = useState('');
  const [accordionPanels, setAccordionPanels] = useState<ReactElement[]>([]);
  const [accordionRefs, setAccordionRefs] = useState<RefObject<HTMLButtonElement>[]>([]);

  const expandPanel = (index: number) => {
    const accordionRef = accordionRefs[index];
    setExpandedPanel(index);
    accordionRef.current?.focus();
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
    <div id="accordionGroup" className="ads-accordion">
      {accordionPanels.map((accordionPanel, index) => (
        <>
          <AccordionTitle
            key={`${accordionPanelId + index}Title`}
            accordionTitle={accordionPanel.props.accordionTitle}
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
            role="region"
            aria-labelledby={`${accordionPanelId + index}Title`}
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