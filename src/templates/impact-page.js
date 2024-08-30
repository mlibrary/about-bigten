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
      <div className="impact">
        
        <section className="cards-container container">
        <Title title={title} />
          <h2 id="stories" className="mb-4">Making an Impact</h2>
          <StoryList stories={stories} />
          <Link to="/stories" className="btn btn-secondary mt-4 float-right">
              Read More Stories
          </Link>
        </section>
        <section className="tagline-container">
          <div className="container">
            <div className="row">
              <div className="tagline col-md-12 text-center">
                <span className="text-white">Did Big Ten Open Books impact you?</span>
                <a className="btn btn-lg btn-secondary" href="https://fulcrum.org/bigten" target="_blank">Find a book and tell us about it</a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="google-data-studio-oa container">
            <h2 id="oa-book-usage">Book Usage</h2>
            <p>This report is created by the <a href="https://openknowledge.community/projects/bad-project/" target="_blank" rel="noreferrer">Book Analytics Dashboard project</a> and represents usage across a number of different platforms. For more information or if you are encountering display issues, see the information panel within the dashboard or contact fulcrum-info@umich.edu.</p>
            <div className="embed-responsive embed-responsive-1by1">
	            <iframe title="Big Ten Open Books Usage" className="embed-responsive-item bad-dashboard" src="https://lookerstudio.google.com/embed/reporting/37e8eae6-0d75-4cf3-b843-988bc3d99eb6/page/imr4C" allowfullscreen></iframe>
            </div>
          </div>
          <div id="readership-map" className="readership-map container">
            <ReactMarkdown source={readershipMapDescription} />
            <div className="readership-map-embed">
              <iframe title="Readership Map" frameborder="0" height="650" width="100%" src="https://maps.publishing.umich.edu/readership-map/?filter.stream=4644734036"></iframe>
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
