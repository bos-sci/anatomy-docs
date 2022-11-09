import { render, screen } from "@testing-library/react";
import Card from "../Card";
import Image from "../Image";
import Tag from "../Tag";

describe("Card", () => {
  it("Renders a default card when only title, heading level and description are provided", () => {
    render(
      <Card
        texts={{
          cardTitle: "Card title",
          cardDescription: "Card description"
        }}
        headingLevel="h2"
      />
    );

    expect(screen.getByText("Card title")).toBeInTheDocument();
    expect(screen.getByRole("heading", {level: 2})).toBeInTheDocument();
    expect(screen.getByText("Card description")).toBeInTheDocument();
  });

  it("Renders a link at the bottom of the card when actionLink, actionLinkText and linkHref are provided", () => {
    render(
      <Card
        texts={{
          cardTitle: "Card title",
          cardDescription: "Card description"
        }}
        headingLevel="h2"
        actionLink={true}
        actionLinkText="Link text"
        linkHref="#"
      />
    );
    const cardLink = screen.getByText("Link text");

    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(cardLink).toBeInTheDocument();
    expect(cardLink).toHaveAttribute("href", "#");
  });

  it("Renders a linked card title when linkTitle and linkHref are provided", () => {
    render(
      <Card
        texts={{
          cardTitle: "Card title",
          cardDescription: "Card description"
        }}
        headingLevel="h2"
        linkTitle={true}
        linkHref="#"
      />
    );

    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByText("Card title")).toHaveAttribute("href", "#");
  });

  it("Renders a Tag when tag is provided", () => {
    render(
      <Card
        texts={{
          cardTitle: "Card title",
          cardDescription: "Card description"
        }}
        headingLevel="h2"
        tag={<Tag>Default tag</Tag>}
      />
    );

    expect(screen.getByText("Default tag")).toBeInTheDocument();
    expect(screen.getByText("Default tag")).toHaveClass("bsds-tag");
  });

  it("Renders an image as the first child inside bsds-card when image is provided", () => {
    render(
      <Card
        texts={{
          cardTitle: "Card title",
          cardDescription: "Card description"
        }}
        headingLevel="h2"
        image={<Image src=""/>}
      />
    );

    expect(screen.getByRole("figure")).toBeInTheDocument();
    expect(screen.getByRole("figure")).toHaveClass("bsds-figure-image");
  });

  it("Adds class 'bsds-card-border-light' and 'bsds-card-shadow' when dropShadow is true", () => {
    render(
      <Card
        texts={{
          cardTitle: "Card title",
          cardDescription: "Card description"
        }}
        headingLevel="h2"
        dropShadow={true}
        linkTitle={true}
        linkHref="#"
      />
    );

    expect(screen.getByTestId("bsdsCard")).toHaveClass("bsds-card-shadow", "bsds-card-border-light");
  });

  it("Renders a gradient on hover with border-light card variant when gradientBrand is true", () => {
    render(
      <Card
        texts={{
          cardTitle: "Card title",
          cardDescription: "Card description"
        }}
        headingLevel="h2"
        gradientBrand={true}
        linkTitle={true}
        linkHref="#"
      />
    );

    expect(screen.getByTestId("bsdsCard")).toHaveClass("bsds-card-gradient", "bsds-card-border-light");
  });

  it("Renders an icon above card title when icon and iconName is provided", async () => {
    render(
      <Card
        texts={{
          cardTitle: "Card title",
          cardDescription: "Card description"
        }}
        headingLevel="h2"
        icon={true}
        iconName="demoCardIcon"
      />
    );

    const demoIcon = await screen.findByTestId("cardDemoIcon");
    expect(demoIcon).toBeInTheDocument();
  });

  it("Adds class 'bsds-card' by default", () => {
    render(
      <Card
        texts={{
          cardTitle: "Card title",
          cardDescription: "Card description"
        }}
        headingLevel="h2"
      />
    );

    expect(screen.getByTestId("bsdsCard")).toHaveClass("bsds-card");
  });

  it("Adds class 'bsds-card-ghost' when 'ghost' variant is declared", () => {
    render(
      <Card
        texts={{
          cardTitle: "Card title",
          cardDescription: "Card description"
        }}
        headingLevel="h2"
        variant="ghost"
      />
    );

    expect(screen.getByTestId("bsdsCard")).toHaveClass("bsds-card-ghost");
  });

  it("Adds class 'bsds-card-border-light' when 'border-light' variant is declared", () => {
    render(
      <Card
        texts={{
          cardTitle: "Card title",
          cardDescription: "Card description"
        }}
        headingLevel="h2"
        variant="border-light"
      />
    );

    expect(screen.getByTestId("bsdsCard")).toHaveClass("bsds-card-border-light");
  });

  it("Adds class 'bsds-card-border-ghost' when 'border-ghost' variant is declared", () => {
    render(
      <Card
        texts={{
          cardTitle: "Card title",
          cardDescription: "Card description"
        }}
        headingLevel="h2"
        variant="border-ghost"
      />
    );

    expect(screen.getByTestId("bsdsCard")).toHaveClass("bsds-card-border-ghost");
  });
});