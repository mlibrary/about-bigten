import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'

export const titleQuery = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
  quickLinks: allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "quick-link" } }
    },
    sort: {
      fields: frontmatter___order,
      order: ASC
    },
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          pageUrl
        }
      }
    }
  }
}
`

const Footer = () => {
    const data = useStaticQuery(titleQuery)
    const {title} = data.site.siteMetadata
    const quickLinks = data.quickLinks.edges
    const now = new Date()
    const year = now.getFullYear()

    return (
    <footer className="footer text-white">
      <div className="container">
        <div className="row justify-content-between">
          <section className="col-md-4 contact">
            <a href="https://btaa.org" className="text-light logo"><img src="/assets/btaa-white.svg" alt="Big Ten Academic Alliance" height="100" width="auto" className="block" /></a>
            <small className="d-block pt-2"><Link className="text-light muli text-uppercase bold" to="/contact">Contact Us</Link></small>                  
          </section>          
          <section className="col-md-2">
            <h2 className="text-light">Big Ten Open Ebooks</h2>
              <ul className="list-unstyled">
                <li><a className="text-light" href="https://fulcrum.org/bigten">Browse and Search</a></li>
                <li><Link className="text-light" to="/about">About</Link></li>
                <li><Link className="text-light" to="/publishers">Our Publishers</Link></li>
                <li><Link className="text-light" to="/librarians">For Librarians</Link></li>
                <li><Link className="text-light" to="/impact">Impact and Usage</Link></li>
              </ul>
          </section>
          <section className="col-md-2">
            <h2 className="text-light">Follow Us</h2>
              <ul className="list-unstyled">
                <li><a className="text-light" href="https://umich.us9.list-manage.com/subscribe?u=a4cd6f758656d0e1542fcb495&id=ee5048bf45">UMP EBC Newsletter</a></li>
                <li><a className="text-light" href="https://twitter.com/UofMPress">Twitter</a></li>
                <li><a className="text-light" href="https://www.facebook.com/universityofmichiganpress/?ref=ts">Facebook</a></li>
                <li><a className="text-light" href="https://www.instagram.com/uofmpress/">Instagram</a></li>
                <li><a className="text-light" href="https://www.youtube.com/user/umichpress">YouTube</a></li>
                <li></li>
              </ul>
          </section>
          <section className="col-md-2">
            <h2 className="text-light">Quicklinks</h2>
            <ul className="list-unstyled">
              {
                quickLinks.map(({node}) => {
                  return (
                    <li key={node.id}>
                      <a href={node.frontmatter.pageUrl} className="text-light">{node.frontmatter.title}</a>
                    </li>
                  )
                })
              }
            </ul>
          </section>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
          <small className="text-light d-block mb-3">© {year}, Big Ten Academic Alliance · <a className="text-light" href="https://fulcrum.org/accessibility/">Accessibility</a> · <a className="text-light" href="https://fulcrum.org/preservation">Preservation</a> · <a className="text-light" href="https://fulcrum.org/privacy">Privacy</a> · <a className="text-light" href="https://fulcrum.org/terms">Terms</a></small>    
          </div>
          <div className="col-md-6 text-right">
            <small className="text-white">Powered by</small> <a href="https://fulcrum.org/"><img className="fulcrum" src="/assets/fulcrum-full-white.svg" alt="Fulcrum logo" height="20" width="auto" /></a>
          </div>
        </div>
      </div>  
    </footer>
  )
}

export default Footer
