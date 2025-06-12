import React from "react"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import "./scss/custom.scss"

import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div>
      <a className="sr-only sr-only-focusable text-dark" href="#content">Skip to main content</a>
      <Navbar />
      <main id="content" className="page-container">
        {children}
      </main>
      <Footer />
      <Helmet>
        <script src={withPrefix('bootstrap.min.js')} type="text/javascript" />
      </Helmet>
    </div>
  )
}

export default Layout
