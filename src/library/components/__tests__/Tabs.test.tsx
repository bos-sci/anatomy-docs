import { render, fireEvent, prettyDOM } from "@testing-library/react";
import Tabs from "../Tabs";
import TabPanel from "../TabPanel";

describe("Tab", () => {
  it("Renders a set of tabs by default", () => {
    const { getByText, getByRole } = render(
        <Tabs>
          <TabPanel tabName="Tabs 1">Sample Tabs 1!</TabPanel>
          <TabPanel tabName="Tabs 2">Sample Tabs 2!</TabPanel>
          <TabPanel tabName="Tabs 3">Sample Tabs 3!</TabPanel>
        </Tabs>
      ),
      firstTab = getByText("Tabs 1"),
      firstPanel = getByText("Sample Tabs 1!"),
      tabList = getByRole("tablist");

    expect(tabList).toBeInTheDocument();
    expect(firstTab).toBeInTheDocument();
    expect(firstPanel).toBeInTheDocument();
    expect(firstPanel).toHaveClass("ads-tab-panel");
    expect(firstPanel).toHaveAccessibleName("Tabs 1");
  });
});
