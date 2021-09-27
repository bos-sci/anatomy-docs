import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Seo from "../components/seo"
import Layout from '../components/layout'

const ComponentDoc = ({ data, location }) => {
  const post = data.contentfulComponent;
  const navItems = data.allContentfulComponent.edges.map(item => ({
      text: item.node.name,
      slug: item.node.fields.slug
    })
  );

  return (
    <Layout location={location} navItems={navItems}>
      <Seo
        title={post.name}
      />
      <article
        itemScope
        itemType="http://schema.org/Code"
      >
        <header>
          <h1 itemProp="headline">{post.name}</h1>
          <dl>
            <dt>Last Updated</dt>
            <dd>{post.updatedAt}</dd>
          </dl>
        </header>
        <MDXRenderer>{post.description.childMdx.body}</MDXRenderer>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export default ComponentDoc

export const pageQuery = graphql`
query DomponentDocById($id: String!, $slug: String!) {
  contentfulComponent(id: {eq: $id}) {
    id
    name
    description {
      childMdx {
        body
      }
    }
    fields {
      slug
    }
    updatedAt
  }
  allContentfulComponent(sort: {fields: name}) {
    edges {
      node {
        name
        fields {
          slug
        }
      }
    }
  }
  mdx(fields: {slug: {eq: $slug}}) {
    body
    frontmatter {
      title
    }
  }
}
`
