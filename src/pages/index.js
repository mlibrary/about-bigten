import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from "gatsby"

import CardList from "../components/cards/cardList"
import Tagline from "../components/tagline"
import CallToAction from "../components/callToAction"

export const IndexQuery = graphql`
query {
  home: markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
    frontmatter {
      taglineSection {
        text
        buttonLabel
        buttonUrl
      }
      firstCallToActionSection {
        description
        buttonUrl
        buttonLabel
      }
      secondCallToActionSection {
        description
        buttonUrl
        buttonLabel
      }
      thirdCallToActionSection {
        description
        buttonUrl
        buttonLabel
      }
    }
  },
  cards: allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "card" } }
    },
    sort: {
      fields: frontmatter___date,
      order: DESC
    },
    limit: 2
  ) {
    edges {
      node {
        fields {
          cardImage
        }
        id
        frontmatter {
          title
          description
          buttonLabel
          buttonUrl
        }
      }
    }
  }
}
`

const IndexPage = ({data}) => {
  const tagline = data.home.frontmatter.taglineSection
  const firstCallToAction = data.home.frontmatter.firstCallToActionSection
  const secondCallToAction = data.home.frontmatter.secondCallToActionSection
  const thirdCallToAction = data.home.frontmatter.thirdCallToActionSection
  const cards = data.cards.edges

  return (
    <Layout>
      <SEO title="Home" />
        <section className="cards-container container">
          <CardList cards={cards} />
        </section>
        <section className="tagline-container">
          <div className="container">
            <div className="row">
              <div className="tagline col-md-8">
                <Tagline text={tagline.text} />
              </div>
              <div className="cta-tagline col-md-4">
                <a className="btn btn-lg btn-primary" href={tagline.buttonUrl}>{tagline.buttonLabel}</a>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-container">
          <div className="container">
            <div className="row">
              <div className="cta-1-container col-sm">
                <CallToAction callToAction={firstCallToAction} />
              </div>
              <div className="cta-2-container col-sm">
                <CallToAction callToAction={secondCallToAction} />
              </div>
              <div className="cta-3-container col-sm">
                <CallToAction callToAction={thirdCallToAction} />
              </div>
            </div>
          </div>
        </section>
    </Layout>
  )
}

export default IndexPage
