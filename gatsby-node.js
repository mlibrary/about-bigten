const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const results = await graphql(`
    query {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `)

  if (results.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query. ${results.errors}`)
    return
  }

  // Filter out cards, we don't make pages for those
  // Also the home-page, quick-links, or index.js. It just has pieces of content,
  // not a generated page.
  pages = results.data.allMarkdownRemark.edges.filter(edge => {
    if (edge.node.frontmatter.templateKey === "card" ||
        edge.node.frontmatter.templateKey === "home-page" ||
        edge.node.frontmatter.templateKey === "quick-link" ||
        edge.node.frontmatter.templateKey === "stories-page") {
      return false
    } else {
      return edge
    }
  })


  pages.forEach(edge => {
    const pathName = edge.node.frontmatter.path || edge.node.fields.slug;
    const component = path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.js`);
    const id = edge.node.id
    createPage({
      path: pathName,
      component,
      context: {
        id: id,
      },
    })
  })
}

//const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node, actions, getNode }) => {
  //fmImagesToRelative(node);

  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {

    // HELIO-3193
    // frontmatter cardImage paths need to be corrected
    if (node.frontmatter.cardImage) {
      console.log("OLDPATH", node.frontmatter.cardImage)
      console.log("FIXPATH", node.frontmatter.cardImage.replace(/^.*assets/, "/assets"))
      createNodeField({
        node,
        name: `cardImage`,
        value: node.frontmatter.cardImage.replace(/^.*assets/, "/assets")
      })
    }

    if (node.frontmatter.storyImage) {
      console.log("OLDPATH", node.frontmatter.storyImage)
      console.log("FIXPATH", node.frontmatter.storyImage.replace(/^.*assets/, "/assets"))
      createNodeField({
        node,
        name: `storyImage`,
        value: node.frontmatter.storyImage.replace(/^.*assets/, "/assets")
      })
    }
    // end HELIO-3193

    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
}
