import React from "react"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import "./scss/custom.scss"

import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="page-container">
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
