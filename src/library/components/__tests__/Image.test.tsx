import { render, screen } from '@testing-library/react';
import Image from 'library/components/Image';

describe('Image', () => {
  it('Renders a default image when only src is provided', () => {
    render(
      <Image
        src="https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        isDecorative
      />
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('Leaves an empty alt tag for image when isDecorative set to true', () => {
    render(
      <Image
        src="https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        isDecorative
      />
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByAltText('')).toBeInTheDocument();
  });

  it('Renders alt text for image when provided', () => {
    render(
      <Image
        src="https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        alt="Image alt text"
      />
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByAltText('Image alt text')).toBeInTheDocument();
  });

  it('Renders image caption with left alignment when provided if hasCaption is true', () => {
    render(
      <Image
        src="https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        texts={{
          caption: 'Image caption text'
        }}
        isDecorative
        hasCaption
      />
    );

    expect(screen.getByText('Image caption text')).toBeInTheDocument();
    expect(screen.getByText('Image caption text')).toHaveClass('bsds-image-caption');
  });

  it('Renders image caption with center alignment if isCaptionCentered is true', () => {
    render(
      <Image
        src="https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        texts={{
          caption: 'Image caption text'
        }}
        isDecorative
        hasCaption
        isCaptionCentered
      />
    );

    expect(screen.getByText('Image caption text')).toBeInTheDocument();
    expect(screen.getByText('Image caption text')).toHaveClass('bsds-image-caption-center');
  });

  it('Renders ghost-style image caption if isGhost is true', () => {
    render(
      <Image
        src="https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        texts={{
          caption: 'Image caption text'
        }}
        isDecorative
        hasCaption
        isGhost
      />
    );

    expect(screen.getByText('Image caption text')).toBeInTheDocument();
    expect(screen.getByText('Image caption text')).toHaveClass('bsds-image-caption-ghost');
  });

  it("Renders default image ratio of 16:9 when ratio isn't specified", () => {
    render(
      <Image
        src="https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        isDecorative
      />
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveClass('bsds-image-16to9');
  });

  it("Renders 1 by 1 image ratio when ratio is set to '1:1'", () => {
    render(
      <Image
        src="https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        ratio="1:1"
        isDecorative
      />
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveClass('bsds-image-1to1');
  });

  it("Renders 21x9 image ratio when ratio is set to '21:9'", () => {
    render(
      <Image
        src="https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        ratio="21:9"
        isDecorative
      />
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveClass('bsds-image-21to9');
  });
});
