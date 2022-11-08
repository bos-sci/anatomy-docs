import { render, screen } from "@testing-library/react";
import ImageElement from "../Image";

describe("Image", () => {
  it("Renders a default image when only imageSrc is provided", () => {
    render(
      <ImageElement
        imageSrc="https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
      />
    );

    expect(screen.getByRole("figure")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("Renders alt text for image when provided", () => {
    render(
      <ImageElement
        imageSrc="https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        texts={{
          imageAlt: "Image alt text"
        }}
      />
    );

    expect(screen.getByRole("figure")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByAltText("Image alt text")).toBeInTheDocument();
  });

  it("Renders image caption with left alignment when provided if isCaptioned is true", () => {
    render(
      <ImageElement
        imageSrc="https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        isCaptioned={true}
        texts={{
          imageCaption: "Image caption text"
        }}
      />
    );

    expect(screen.getByText("Image caption text")).toBeInTheDocument();
    expect(screen.getByText("Image caption text")).toHaveClass("bsds-image-fig-caption-left");
  });

  it("Renders image caption with center alignment if centerCaption is true", () => {
    render(
      <ImageElement
        imageSrc="https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        isCaptioned={true}
        centerCaption={true}
        texts={{
          imageCaption: "Image caption text"
        }}
      />
    );

    expect(screen.getByText("Image caption text")).toBeInTheDocument();
    expect(screen.getByText("Image caption text")).toHaveClass("bsds-image-fig-caption-center");
  });

  it("Renders ghost-style image caption if isGhost is true", () => {
    render(
      <ImageElement
        imageSrc="https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        isCaptioned={true}
        isGhost={true}
        texts={{
          imageCaption: "Image caption text"
        }}
      />
    );

    expect(screen.getByText("Image caption text")).toBeInTheDocument();
    expect(screen.getByText("Image caption text")).toHaveClass("bsds-image-fig-caption-left-ghost");
  });

  it("Renders default image ratio of 16x9 when imageRatio isn't specified", () => {
    render(
      <ImageElement
        imageSrc="https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
      />
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveClass("image-16x9");
  });

  it("Renders 50% split image ratio when imageRatio is set to 'even-split'", () => {
    render(
      <ImageElement
        imageSrc="https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        imageRatio="even-split"
      />
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveClass("image-even-split");
  });

  it("Renders 1 by 1 image ratio when imageRatio is set to '1x1'", () => {
    render(
      <ImageElement
        imageSrc="https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        imageRatio="1x1"
      />
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveClass("image-1x1");
  });

  it("Renders 21x9 image ratio when imageRatio is set to '21x9'", () => {
    render(
      <ImageElement
        imageSrc="https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        imageRatio="21x9"
      />
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveClass("image-21x9");
  });
});