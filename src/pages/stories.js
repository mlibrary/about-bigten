import React from "react"
import {graphql} from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import StoryList from "../components/stories/storyList"
import Title from '../components/title'

const Stories = ({data}) => {
  const title = data.storyPage.frontmatter.title
  const html = data.storyPage.html
  const stories = data.stories.edges

  return (
    <Layout>
      <SEO title="Stories" />
      <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Title title={title} />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>

        <div className="row justify-content-md-center stories cards-container">
          <div className="col-md-12">
            <StoryList stories={stories} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  storyPage: markdownRemark(frontmatter: { templateKey: { eq: "stories-page" } }) {
    html
    frontmatter {
      title
    }
  }
  stories: allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "story" } }
    },
    sort: {
      fields: frontmatter___date,
      order: DESC
    }
  ) {
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

export default Stories