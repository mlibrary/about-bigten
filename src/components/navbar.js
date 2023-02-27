import React from "react"
import {Link} from "gatsby"
// import Img from 'gatsby-image'

//export const getLogo = graphql`
//{
//  logo:file(relativePath:{eq: "LeverLogo.svg"}) {
//    childImageSharp{
//      fluid(maxWidth: 700){
//        ...GatsbyImageSharpFluid
//      }
//    }
//  }
//}
// `

const Navbar = () => {

  return (
  
  <div className="header-nav-container">    
      <header>
        <div className="container py-3">
          <div className="row justify-content-end">
            <div className="col-md-8">
              <a href="/" className="navbar-brand">
                <img src="/assets/btaa-blue.svg" alt="" height="70" width="auto" className="navbar-brand-logo"/> <h1>Big Ten<br/> Open Books</h1>
              </a>
            </div>
            <div className="col-md-4 pt-3">
              <form className="search-form navbar-left navbar-form" action="https://fulcrum.org/bigten?locale=en" acceptCharset="UTF-8" method="get">
                <fieldset>
                  <div className="input-group">
                    <label className="sr-only" htmlFor="catalog_search">Search and discover books</label>
                    <input type="search" name="q" id="catalog_search" className="q search-query form-control" placeholder="Search and discover books" tabIndex="0"/>
                    <div className="input-group-btn">
                      <button type="submit" className="search-submit" id="keyword-search-submit" tabIndex="0" aria-label="Submit search">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
                
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
              <div className="nav-browse mt-1">
                <a href="https://fulcrum.org/bigten/">Browse Books</a>                
              </div>
            </div> 
          </div>
        </div>        
      </header>
      <div className="nav-scroller">
        <div className="container">
          <nav className="nav d-flex justify-content-between">
            <Link to="/about" className="nav-link text-light">
              About
            </Link>
            <Link to="/publishers" className="nav-link text-light">
              Our Publishers
            </Link>
            <Link to="/librarians" className="nav-link text-light">
              For Librarians
            </Link>            
            <Link to="/impact" className="nav-link text-light">
              Usage and Impact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
