import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const [publishersOpen, setPublishersOpen] = useState(false)
  const [librariansOpen, setLibrariansOpen] = useState(false)

  const publishersRef = useRef(null)
  const librariansRef = useRef(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (publishersRef.current && !publishersRef.current.contains(e.target)) {
        setPublishersOpen(false)
      }
      if (librariansRef.current && !librariansRef.current.contains(e.target)) {
        setLibrariansOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="header-nav-container">
      <header>
        <div className="container py-3">
          <div className="row justify-content-end">
            <div className="col-md-8">
              <a href="/" className="navbar-brand">
                <img src="/assets/btaa-blue.svg" alt="" height="70" width="auto" className="navbar-brand-logo" />
                <h1>Big Ten<br /> Open Books</h1>
              </a>
            </div>
            <div className="col-md-4 pt-3">
              <form className="search-form navbar-left navbar-form" action="https://fulcrum.org/bigten?locale=en" acceptCharset="UTF-8" method="get">
                <fieldset>
                  <div className="input-group">
                    <label className="sr-only" htmlFor="catalog_search">Search and discover books</label>
                    <input type="search" name="q" id="catalog_search" className="q search-query form-control" placeholder="Search and discover books" tabIndex="0" />
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

      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbar"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={() => setNav(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="navbar" className={`${isOpen ? "show" : ""} collapse navbar-collapse`}>
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link to="/about" className="nav-link text-light">About</Link>
              </li>

              <li className={`nav-item dropdown ${publishersOpen ? "show" : ""}`} ref={publishersRef}>
                <button
                  className="nav-link text-light dropdown-toggle btn btn-link"
                  onClick={() => setPublishersOpen(!publishersOpen)}
                  aria-expanded={publishersOpen}
                >
                  Our Publishers
                </button>
                <div className={`dropdown-menu ${publishersOpen ? "show" : ""}`}>
                  <a className="dropdown-item" href="/publishers">Publishers</a>
                  <a className="dropdown-item" href="/collections">Our Collections</a>
                </div>
              </li>

              <li className="nav-item">
                <Link to="/supporters" className="nav-link text-light">Our Supporters</Link>
              </li>

              <li className="nav-item">
                <Link to="/sponsor" className="nav-link text-light">Sponsor A Book</Link>
              </li>

              <li className={`nav-item dropdown ${librariansOpen ? "show" : ""}`} ref={librariansRef}>
                <button
                  className="nav-link text-light dropdown-toggle btn btn-link"
                  onClick={() => setLibrariansOpen(!librariansOpen)}
                  aria-expanded={librariansOpen}
                >
                  For Librarians
                </button>
                <div className={`dropdown-menu ${librariansOpen ? "show" : ""}`}>
                  <a className="dropdown-item" href="/investment">Investment Criteria</a>
                  <a className="dropdown-item" href="/funding">Funding &amp; Support</a>
                  <a className="dropdown-item" href="/implement">Implement the Collections</a>
                </div>
              </li>

              <li className="nav-item">
                <Link to="/impact" className="nav-link text-light">Impact and Usage</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
