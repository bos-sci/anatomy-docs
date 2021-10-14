import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Seo from "../components/seo"
import Layout from '../components/layout'

const CodeStandardDoc = ({ data, location }) => {
  const post = data.contentfulCodeStandard;
  const navItems = [
    {
      text: 'General',
      slug: '/code-standards/general/'
    },
    {
      text: 'Accessibility',
      slug: '/code-standards/accessibility/'
    },
    {
      text: 'HTML',
      slug: '/code-standards/html/'
    },
    {
      text: 'CSS',
      slug: '/code-standards/css/'
    },
    {
      text: 'Javascript',
      slug: '/code-standards/javascript/'
    },
    {
      text: 'DevOps',
      slug: '/code-standards/devops/'
    },
  ];

  return (
    <Layout location={location} navItems={navItems}>
      <Seo
        title={post.name}
      />
      <article>
        <header>
          <h1>{post.name}</h1>
          <dl>
            <dt>Last Updated</dt>
            <dd>{new Date(post.updatedAt).toLocaleDateString()}</dd>
          </dl>
        </header>
        <MDXRenderer>{post.content.childMdx.body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export default CodeStandardDoc;

export const pageQuery = graphql`
  query CodeStandardDocById($id: String!) {
    contentfulCodeStandard(id: {eq: $id}) {
      id
      name
      content {
        childMdx {
          body
        }
      }
      updatedAt
    }
  }
`
