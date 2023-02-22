import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="container">
      <SEO title="404: Not found" />
      <h1 className="mb-3">404 - The page you were looking for doesn't exist</h1>
      <p>You may have mistyped the address or the page may have moved.</p>
    </div>
  </Layout>
)

export default NotFoundPage
