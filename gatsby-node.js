const path = require('path')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            }
        }
    })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
    query {
        allSanityPost {
            edges {
              node {
                id
                slug {
                  current
                }
              }
            }
        }
    }
      `)
    
      if (result.error) {
          reporter.panic("Problema ao carregar os projetos");
          return;
      }

      const projects = result.data.allSanityPost.edges;
      projects.forEach(({ node: project }) => {
          const slug = project.slug.current;
          const id = project.id;
          actions.createPage({
                path: `/${slug}/`,
                component: require.resolve('./src/templates/project.js'),
                context: { id }
          })
      })
}