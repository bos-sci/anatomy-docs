import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Seo from "../components/seo"
import Layout from '../components/layout'

const CodeStandardDoc = ({ data, location }) => {
  const post = data.contentfulCodeStandard;
  const navItems = [
    {
      text: 'General',
      slug: '/code-standards/general'
    },
    {
      text: 'Accessibility',
      slug: '/code-standards/accessibility'
    },
    {
      text: 'HTML',
      slug: '/code-standards/html'
    },
    {
      text: 'CSS',
      slug: '/code-standards/css'
    },
    {
      text: 'Javascript',
      slug: '/code-standards/javascript'
    },
    {
      text: 'DevOps',
      slug: '/code-standards/devops'
    },
  ];

  return (
    <Layout location={location} navItems={navItems}>
      <Seo
        title={post.name}
      />
      <article
        itemScope
        itemType="http://schema.org/Code"
        className=""
      >
        <header>
          <h1 itemProp="headline">{post.name}</h1>
          <dl>
            <dt>Last Updated</dt>
            <dd>{post.updatedAt}</dd>
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
