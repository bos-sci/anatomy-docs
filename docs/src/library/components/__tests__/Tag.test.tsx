import { render, screen } from '@testing-library/react';
import Tag from 'library/components/Tag';

describe('Tag', () => {
  it('Renders default variant when no variant prop passed', () => {
    render(<Tag>Sample Tag!</Tag>);
    expect(screen.getByText('Sample Tag!')).toBeInTheDocument();
    expect(screen.getByText('Sample Tag!')).toHaveClass('bsds-tag');
  });

  it('Renders ghost variant', () => {
    render(<Tag isGhost>Variant Tag!</Tag>);

    expect(screen.getByText('Variant Tag!')).toBeInTheDocument();
    expect(screen.getByText('Variant Tag!')).toHaveClass('bsds-tag-ghost');
  });

  it('Renders accent variation', () => {
    render(<Tag variant="accent">Sample Tag!</Tag>);
    expect(screen.getByText('Sample Tag!')).toBeInTheDocument();
    expect(screen.getByText('Sample Tag!')).toHaveClass('bsds-tag-accent');
  });

  it('Renders accent-ghost variation', () => {
    render(
      <Tag variant="accent" isGhost>
        Sample Tag!
      </Tag>
    );

    expect(screen.getByText('Sample Tag!')).toBeInTheDocument();
    expect(screen.getByText('Sample Tag!')).toHaveClass('bsds-tag-accent-ghost');
  });

  it('Renders assertive variation', () => {
    render(<Tag variant="assertive">Variant Tag!</Tag>);

    expect(screen.getByText('Variant Tag!')).toBeInTheDocument();
    expect(screen.getByText('Variant Tag!')).toHaveClass('bsds-tag-assertive');
  });

  it('Renders assertive-ghost variation', () => {
    render(
      <Tag variant="assertive" isGhost>
        Variant Tag!
      </Tag>
    );

    expect(screen.getByText('Variant Tag!')).toBeInTheDocument();
    expect(screen.getByText('Variant Tag!')).toHaveClass('bsds-tag-assertive-ghost');
  });

  it("Renders featured variation with 'featured' as tag text", () => {
    render(<Tag variant="featured">Variant Tag!</Tag>);

    expect(screen.getByText('Featured')).toBeInTheDocument();
    expect(screen.getByText('Featured')).toHaveClass('bsds-tag-featured');
  });

  it("Renders featured-ghost variation with 'featured' as tag text", () => {
    render(
      <Tag variant="featured" isGhost>
        Variant Tag!
      </Tag>
    );

    expect(screen.getByText('Featured')).toBeInTheDocument();
    expect(screen.getByText('Featured')).toHaveClass('bsds-tag-featured-ghost');
  });
});
