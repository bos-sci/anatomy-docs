import Layout from 'docs/shared/components/Layout';
import useTitle from 'docs/shared/hooks/useTitle';
import CardGroup from 'library/components/CardGroup';
import ContentCard from 'library/components/ContentCard';
import Tag from 'library/components/Tag';
import { Helmet } from 'react-helmet';

const Home = (): JSX.Element => {
  useTitle({ titlePrefix: `Home` });

  return (
    <Layout>
      <Helmet>
        <meta name="description" content="Boston Scientific Anatomy Design System website homepage" />
      </Helmet>
      <main id="mainContent" className="docs-home">
        <div className="docs-container bg-gradient-assertive bsds-pt-0">
          <div className="is-constrained">
            <h1 className="docs-page-title">Anatomy</h1>
            <p className="docs-page-description bsds-body-assertive">
              Boston Scientific&apos;s global design system, creating consistent and accessible digital experiences that
              empower our users&apos; problem-solving.
            </p>
          </div>
        </div>
        <div className="docs-container">
          <div className="is-constrained">
            <h2>Explore the system</h2>
            <CardGroup cardLayout="threeUp" className="bsds-mt-4x">
              <ContentCard
                texts={{
                  cardTitle: 'Accessibility',
                  cardDescription: 'Accessible design provides better user experiences for everyone.'
                }}
                headingLevel="h3"
                actionLinkText="Our accessibility approach"
                linkHref="/foundations/accessibility"
                iconName="people"
                actionLink
                dropShadow
                icon
              />
              <ContentCard
                texts={{
                  cardTitle: 'Tokens',
                  cardDescription: 'Tokens maintain visual consistency across different experiences.'
                }}
                headingLevel="h3"
                actionLinkText="Learn about tokens"
                linkHref="/foundations/tokens"
                iconName="globe"
                actionLink
                dropShadow
                icon
              />
              <ContentCard
                texts={{
                  cardTitle: 'Content guidelines',
                  cardDescription: 'Guidelines for writing for specific situations and components.'
                }}
                headingLevel="h3"
                actionLinkText="Writing for Boston Scientific"
                linkHref="/content/content-guidelines"
                iconName="document"
                actionLink
                dropShadow
                icon
              />
            </CardGroup>
          </div>
        </div>
        <div className="docs-container bg-action">
          <div className="is-constrained">
            <h2>Resources</h2>
            <CardGroup cardLayout="twoUp" className="bsds-mt-4x">
              <ContentCard
                texts={{
                  cardTitle: 'Design libraries',
                  cardDescription: 'Shared styles, components, and guidelines for designers.'
                }}
                headingLevel="h3"
                actionLinkText="Download the design libraries"
                linkHref="/resources/designers/libraries"
                tag={<Tag>Web</Tag>}
                actionLink
                dropShadow
              />
              <ContentCard
                texts={{
                  cardTitle: 'Code standards',
                  cardDescription: 'Guidelines and best practices for front-end web development at Boston Scientific.'
                }}
                headingLevel="h3"
                actionLinkText="Read our code standards"
                linkHref="/code-standards/general"
                tag={<Tag>Web</Tag>}
                actionLink
                dropShadow
              />
              <ContentCard
                texts={{
                  cardTitle: 'Icon guidelines',
                  cardDescription: 'Guides for creating consistent decorative and system icons.'
                }}
                headingLevel="h3"
                actionLinkText="Learn how to create icons"
                linkHref="/resources/designers/icon-guidelines"
                tag={<Tag>Web</Tag>}
                actionLink
                dropShadow
              />
              <ContentCard
                texts={{
                  cardTitle: 'Brand standards',
                  cardDescription: `Boston Scientific's global brand standards, images, and assets.`
                }}
                headingLevel="h3"
                actionLinkText="Go to brand standards"
                linkHref="https://www.bscbrandstandards.com/"
                tag={<Tag>Global</Tag>}
                actionLink
                dropShadow
              />
            </CardGroup>
          </div>
        </div>
        <div className="docs-container">
          <div className="is-constrained">
            <CardGroup cardLayout="twoUp" className="bsds-mt-4x">
              <ContentCard
                texts={{
                  cardTitle: `What's new`,
                  cardDescription: `Anatomy is always updating and evolving. Find the latest updates in our release notes.`
                }}
                headingLevel="h3"
                actionLinkText="Read our release notes"
                linkHref="/resources/release-notes"
                actionLink
              />
              <ContentCard
                texts={{
                  cardTitle: 'Contact us',
                  cardDescription: `Submit feedback, questions, bug reports, component feature requests, or training
                requests.`
                }}
                headingLevel="h3"
                actionLinkText="Email the team"
                linkHref="mailto:anatomy.team@bsci.com"
                actionLink
              />
            </CardGroup>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
