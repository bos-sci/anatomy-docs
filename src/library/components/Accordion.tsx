// NOTE:
// We could consider using <details> here
// The current implementation is based on the example from aria practices
// We did not include role="region" aria-labelledby="titleId" (optional) because we will likely have 6+ panels
//   https://www.w3.org/TR/wai-aria-practices-1.1/#accordion
//   https://www.w3.org/TR/wai-aria-practices-1.1/#wai-aria-roles-states-and-properties
//   https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html

import { Fragment, ReactElement, useEffect, useId, useState } from 'react';
import HeadingElement from './Heading';
import AccordionHeading from './AccordionHeading';

type Props = {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactElement[] | ReactElement;
}

const Accordion = ({ headingLevel = "h2", children }: Props): JSX.Element => {

  const accordionId = useId();

  const [expandedPanels, setExpandedPanels] = useState(new Set<number>());
  const [accordionPanels, setAccordionPanels] = useState<ReactElement[]>([]);

  const togglePanel = (index: number) => {
    const newPanels = new Set<number>([...expandedPanels]);
    newPanels.has(index) ? newPanels.delete(index) : newPanels.add(index);
    setExpandedPanels(newPanels);
  }

  useEffect(() => {
    setAccordionPanels(Array.isArray(children) ? children : [children]);
  }, [children]);

  return (
    <div className="bsds-accordion">
      {accordionPanels.map((accordionPanel, index) => (
        <Fragment key={accordionId + index}>
          <HeadingElement
            headingLevel={headingLevel}
            className={
              "bsds-accordion-heading"
              + (accordionPanel.props.stoplightColor
                  ? ` bsds-accordion-stoplight-${accordionPanel.props.stoplightColor}`
                  : '')
            }
          >
            <AccordionHeading
              heading={accordionPanel.props.heading}
              index={index}
              togglePanel={togglePanel}
              isPanelExpanded={expandedPanels.has(index)}
              panelId={accordionId + '-panel' + index}
            />
          </HeadingElement>
          <div
            id={accordionId + '-panel' + index}
            className="bsds-accordion-panel"
            hidden={!expandedPanels.has(index)}
          >
            { accordionPanel }
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default Accordion;