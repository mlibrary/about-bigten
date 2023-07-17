import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout'
import Title from '../components/title'
import StoryList from '../components/stories/storyList'
import {graphql, Link} from 'gatsby'
import ReactMarkdown from "react-markdown"

const Impact = ({data}) => {
  const {
    title,
    readershipMapDescription
    // googleDataStudioDescription
  } = data.markdownRemark.frontmatter

  const stories = data.stories.edges

  // When we have markdown in the frontmatter, we need to process it
  // with ReactMarkdown (or something) or something similar.
  // When it's in the "html"/not frontmatter, we would "dangerouslySetInnerHTML"

  return (
    <Layout>
      <SEO title={title} />
      <div className="container">
        <Title title={title} />
        
        <section className="cards-container">
          <h2 id="stories" className="mb-4">Making an Impact</h2>
          <StoryList stories={stories} />
          <Link to="/stories" className="btn btn-secondary mt-4 float-right">
              Read More Stories
          </Link>
        </section>
        <section>
          <div id="readership-map" className="readership-map">
            <ReactMarkdown source={readershipMapDescription} />
            <div className="readership-map-embed">
              <iframe title="Readership Map" frameborder="0" height="650" width="100%" src="https://maps.publishing.umich.edu/readership-map/?filter.view=284971125"></iframe>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query impactPage($id: String!) {
  	markdownRemark(id: {eq: $id}) {
      frontmatter{
        title
        readershipMapDescription
      }
    },
    stories: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "story"}}}, sort: {fields: frontmatter___date, order: DESC}, limit: 2) {
      edges {
        node {
          id
          fields {
            slug
            storyImage
          }
          frontmatter {
            title
            summary  
          }
        }
      }
    }
  }
`

export default Impact
