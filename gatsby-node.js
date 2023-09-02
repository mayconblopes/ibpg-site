const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query SlugQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "evento" } } }) {
        nodes {
          frontmatter {
            eventSlug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/eventos/' + node.frontmatter.eventSlug,
      component: path.resolve('./src/templates/evento-details.tsx'),
      context: { eventSlug: node.frontmatter.eventSlug },
    })
  })
}
