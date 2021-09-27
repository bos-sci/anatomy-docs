const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const contentfulTypes = ['ContentfulComponent', 'ContentfulCodeStandard'];

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

function getComponent(type) {
  const componentDoc = path.resolve(`./src/templates/component-doc.js`)
  const codeStandardDoc = path.resolve(`./src/templates/codeStandard-doc.js`)

  switch (type) {
    case 'ContentfulComponent':
      return componentDoc;
    case 'ContentfulCodeStandard':
      return codeStandardDoc;

    default:
      break;
  }
}

function getSlug(entry, name) {
  let base = '';
  switch (entry) {
    case 'ContentfulComponent':
      base = 'components';
      break;
    case 'ContentfulCodeStandard':
      base = 'code-standards';
      break;

    default:
      break;
  }
  return '/' + base + '/' + slugify(name);
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    query getContentfulData {
      allContentfulCodeStandard {
        edges {
          node {
            id
            name
            internal {
              type
            }
            fields {
              slug
            }
          }
        }
      }
      allContentfulComponent {
        edges {
          node {
            id
            name
            internal {
              type
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading the docs pages`,
      result.errors
    )
    return
  }

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL


  Object.keys(result.data).forEach(entry => {
    result.data[entry].edges.forEach(page => {
      createPage({
        path: page.node.fields.slug,
        component: getComponent(page.node.internal.type),
        context: {
          id: page.node.id,
          slug: page.node.fields.slug
        },
      })
    });
  });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.fileAbsolutePath) {
    createNodeField({
      name: `slug`,
      node,
      value: `/components/${slugify(node.frontmatter.title)}`
    })
  }
  else if (contentfulTypes.includes(node.internal.type)) {
    createNodeField({
      name: `slug`,
      node,
      value: getSlug(node.internal.type, node.name)
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
