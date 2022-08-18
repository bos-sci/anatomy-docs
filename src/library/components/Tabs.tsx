// TODO: figure out if we want to add aria-label or aria-labelledby on the tablist

import {
  createRef,
  KeyboardEvent,
  ReactElement,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import IconChevronLeft from './icon/icons/IconChevronLeft';
import IconChevronRight from './icon/icons/IconChevronRight';
import Tab from "./Tab";

type Props = {
  children: ReactElement[] | ReactElement;
  ariaLabel: string;
};

let tabsId = 0;

const Tabs = (props: Props): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tabPanelId, setTabPanelId] = useState("");
  const [tabPanels, setTabPanels] = useState<ReactElement[]>([]);
  const [tabRefs, setTabRefs] = useState<RefObject<HTMLButtonElement>[]>([]);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [visibleRange, setVisibleRange] = useState([0, 0]);
  const [scrollBtnStates, setScrollBtnStates] = useState([false, false]); // [leftScrollBtn, rightScrollBtn] disabled when true

  const tabListRef = useRef<HTMLDivElement>(null);

  const debounce = (fn: Function, ms = 30) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
  };

  const scrollManager = useCallback(() => {
    if (tabListRef.current) {
      setHasOverflow(tabListRef.current.scrollWidth > tabListRef.current.clientWidth);
    }

    // Determines the index of the first and last visible tab
    // A tab is deemed visible if 2/3 of it are in the scroll area
    const tabsVisibility = tabRefs.map(ref => {
      const rightEdge = ref.current?.offsetLeft! + (ref.current?.clientWidth! * 0.66);
      const leftEdge = ref.current?.offsetLeft! + (ref.current?.clientWidth! * 0.33);
      return rightEdge < tabListRef.current?.scrollLeft! + tabListRef.current?.clientWidth! && leftEdge > tabListRef.current?.scrollLeft!;
    });
    setVisibleRange([tabsVisibility.indexOf(true), tabsVisibility.lastIndexOf(true)]);

    // Disable controls when scrolled all the way left or right
    if (tabListRef.current) {
      if (tabListRef.current?.scrollLeft === 0) {
        setScrollBtnStates([true, false]);
      } else if (tabListRef.current?.scrollLeft === tabListRef.current?.scrollWidth - tabListRef.current?.clientWidth) {
        setScrollBtnStates([false, true]);
      } else {
        setScrollBtnStates([false, false]);
      }
    }
  }, [tabRefs])

  // Scrolls to the tab "distance" tabs away from the left or right most visible tab
  const scrollTabs = (distance: number) => {
    let currentTarget = distance < 0 ? visibleRange[0] : visibleRange[1];
    let newTarget = 0;
    if (currentTarget + distance > tabRefs.length - 1) {
      newTarget = tabRefs.length - 1;
    } else if (currentTarget + distance < 0) {
      newTarget = 0;
    } else {
      newTarget = currentTarget + distance;
    }

    tabRefs[newTarget].current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: no-preference)").matches ? 'smooth' : 'auto',
      block: 'nearest',
      inline: distance < 0 ? 'start' : 'end'
    });
  }

  const selectTab = (index: number) => {
    const tabRef = tabRefs[index];
    setSelectedTab(index);
    tabRef.current?.focus();
  };

  const keyManager = (e: KeyboardEvent<HTMLDivElement>) => {
    let nextTab = 0;
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        if (selectedTab === 0) {
          nextTab = tabPanels.length - 1;
        } else {
          nextTab = selectedTab - 1;
        }
        selectTab(nextTab);
        break;

      case "ArrowRight":
        e.preventDefault();
        if (selectedTab === tabPanels.length - 1) {
          nextTab = 0;
        } else {
          nextTab = selectedTab + 1;
        }
        selectTab(nextTab);
        break;

      case "Home":
        e.preventDefault();
        selectTab(0);
        break;

      case "End":
        e.preventDefault();
        selectTab(tabPanels.length - 1);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const idNum = ++tabsId;
    setTabPanelId("tabPanel" + idNum);
  }, []);

  useEffect(() => {
    if (Array.isArray(props.children)) {
      setTabPanels(props.children);
    } else {
      setTabPanels([props.children]);
    }
    let refs: RefObject<HTMLButtonElement>[] = [];
    for (let i = 0; i < tabPanels.length; i++) {
      refs.push(createRef());
    }
    setTabRefs(refs);
  }, [props.children, tabPanels.length]);

  useEffect(() => {
    scrollManager();
  }, [scrollManager, tabListRef.current?.scrollWidth]);

  useEffect(() => {
    window.addEventListener('resize', debounce(scrollManager));
    return () => {
      window.removeEventListener('resize', debounce(scrollManager));
    }
  }, [scrollManager]);

  return (
    <div className={"bsds-tabs" + (hasOverflow ? " has-overflow" : "")}>
      <div className="bsds-tab-controls">
        <div
          ref={tabListRef}
          className="bsds-tab-list"
          role="tablist"
          aria-label={props.ariaLabel}
          onKeyDown={keyManager}
          onScroll={debounce(scrollManager)}
        >
          {tabPanels.map((tabPanel, index) => (
            <Tab
              key={`${tabPanelId + index}Tab`}
              tabName={tabPanel.props.tabName}
              index={index}
              setSelectedTab={setSelectedTab}
              isActive={index === selectedTab}
              tabPanelId={tabPanelId + index}
              tabRef={tabRefs[index]}
            />
          ))}
        </div>
        <div className="bsds-tab-overflow">
          <button
            className="bsds-tab-overflow-control"
            disabled={scrollBtnStates[0]}
            tabIndex={-1}
            aria-hidden="true"
            onClick={() => scrollTabs(-1)}>
              <IconChevronLeft className="bsds-icon-2x" />
          </button>
          <button
            className="bsds-tab-overflow-control"
            disabled={scrollBtnStates[1]}
            tabIndex={-1}
            aria-hidden="true"
            onClick={() => scrollTabs(1)}>
              <IconChevronRight className="bsds-icon-2x" />
          </button>
        </div>
      </div>
      <div className="bsds-tab-panels">
        {tabPanels.map((tabPanel, index) => (
          <div
            key={tabPanelId + index}
            id={tabPanelId + index}
            className="bsds-tab-panel"
            role="tabpanel"
            aria-labelledby={`${tabPanelId + index}Tab`}
            tabIndex={0}
            hidden={index !== selectedTab}
          >
            {tabPanel}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
