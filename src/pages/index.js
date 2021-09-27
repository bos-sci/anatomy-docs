import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo title="Anatomy" />
        <h1>Anatomy</h1>
    </Layout>
  )
}

export default BlogIndex
