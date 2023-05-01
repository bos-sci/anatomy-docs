import { render, screen } from '@testing-library/react';
import ProductCard from '../ProductCard';
import Tag from '../Tag';
import Image from '../Image';

describe('Product Card', () => {
  it('Renders a deafult product card when only title, description and link are provided', () => {
    render(
      <ProductCard
        texts={{
          title: 'Product card title',
          description: 'Product card description'
        }}
        linkTo="docs-demo-link"
      />
    );

    expect(screen.getByText('Product card title')).toBeInTheDocument();
    expect(screen.getByText('Product card description')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', 'docs-demo-link');
  });

  it('Renders a product card with a semantic card title when headingLevel is provided', () => {
    render(
      <ProductCard
        texts={{
          title: 'Product card title',
          description: 'Product card description'
        }}
        linkTo="docs-demo-link"
        headingLevel="h2"
      />
    );

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('Renders a product card with a non-semantic card title when no headingLevel is provided', () => {
    render(
      <ProductCard
        texts={{
          title: 'Product card title',
          description: 'Product card description'
        }}
        linkTo="docs-demo-link"
      />
    );

    expect(screen.getByText('Product card title')).toHaveClass('bsds-product-card-ns-title');
  });

  it('Renders a product card with an assertive non-semantic card title when no headingLevel is provided and assertiveTitle is true', () => {
    render(
      <ProductCard
        texts={{
          title: 'Product card title',
          description: 'Product card description'
        }}
        linkTo="docs-demo-link"
        assertiveTitle={true}
      />
    );

    expect(screen.getByText('Product card title')).toHaveClass('bsds-product-card-ns-title-assertive');
  });

  it('Renders a product card with a Tag when tag is provided', () => {
    render(
      <ProductCard
        texts={{
          title: 'Product card title',
          description: 'Product card description'
        }}
        linkTo="docs-demo-link"
        tag={<Tag>Product family name</Tag>}
      />
    );

    expect(screen.getByText('Product family name')).toBeInTheDocument();
    expect(screen.getByText('Product family name')).toHaveClass('bsds-tag');
  });

  it("Adds class 'bsds-card-shadow' when dropShadow is true", () => {
    render(
      <ProductCard
        texts={{
          title: 'Product card title',
          description: 'Product card description'
        }}
        linkTo="docs-demo-link"
        dropShadow={true}
      />
    );

    expect(screen.getByTestId('bsdsProductCard')).toHaveClass('bsds-card-shadow');
  });

  it('Renders a gradient on hover when gradientBrand is true', () => {
    render(
      <ProductCard
        texts={{
          title: 'Product card title',
          description: 'Product card description'
        }}
        linkTo="docs-demo-link"
        gradientBrand={true}
      />
    );

    expect(screen.getByTestId('bsdsProductCard')).toHaveClass('bsds-card-gradient');
  });

  it('Renders an image with 1:1 ratio as the first child inside bsds-product-card when image is provided', () => {
    render(
      <ProductCard
        texts={{
          title: 'Product card title',
          description: 'Product card description'
        }}
        linkTo="docs-demo-link"
        image={
          <Image
            src="https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
            alt="Golden retriever puppy."
          />
        }
      />
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveClass('bsds-image-1to1');
    expect(screen.getByAltText('Golden retriever puppy.')).toBeInTheDocument();
  });

  it("Renders an image with 50:50 ratio as the first child inside bsds-product-card when image ratio is set to '50:50'", () => {
    render(
      <ProductCard
        texts={{
          title: 'Product card title',
          description: 'Product card description'
        }}
        linkTo="docs-demo-link"
        image={
          <Image
            src="https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
            alt="Golden retriever puppy."
            ratio="50:50"
          />
        }
      />
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveClass('bsds-image-50-split');
    expect(screen.getByAltText('Golden retriever puppy.')).toBeInTheDocument();
  });

  it("Adds class 'bsds-product-card' by default", () => {
    render(
      <ProductCard
        texts={{
          title: 'Product card title',
          description: 'Product card description'
        }}
        linkTo="docs-demo-link"
        variant="ghost"
      />
    );

    expect(screen.getByTestId('bsdsProductCard')).toHaveClass('bsds-product-card');
  });

  it("Adds class 'bsds-card-ghost' when 'ghost' variant is declared", () => {
    render(
      <ProductCard
        texts={{
          title: 'Product card title',
          description: 'Product card description'
        }}
        linkTo="docs-demo-link"
        variant="ghost"
      />
    );

    expect(screen.getByTestId('bsdsProductCard')).toHaveClass('bsds-card-ghost');
  });

  it("Adds class 'bsds-card-border-light' when 'border-light' variant is declared", () => {
    render(
      <ProductCard
        texts={{
          title: 'Product card title',
          description: 'Product card description'
        }}
        linkTo="docs-demo-link"
        variant="border-light"
      />
    );

    expect(screen.getByTestId('bsdsProductCard')).toHaveClass('bsds-card-border-light');
  });

  it("Adds class 'bsds-card-border-ghost' when 'border-ghost' variant is declared", () => {
    render(
      <ProductCard
        texts={{
          title: 'Product card title',
          description: 'Product card description'
        }}
        linkTo="docs-demo-link"
        variant="border-ghost"
      />
    );

    expect(screen.getByTestId('bsdsProductCard')).toHaveClass('bsds-card-border-ghost');
  });
});
