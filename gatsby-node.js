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
        allMdx {
          edges {
            node {
              id
              frontmatter {
                slug
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

      const projects = result.data.allMdx.edges;
      projects.forEach(({ node: project }) => {
          const slug = project.frontmatter.slug;
          const id = project.id;
          actions.createPage({
                path: `/${slug}/`,
                component: require.resolve('./src/templates/project.js'),
                context: { id }
          })
      })
}