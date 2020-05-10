const dinner = require("./dinner")
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  dinner.forEach(item => {
    createPage({
      component: path.resolve(`./src/templates/MenuItem.js`),
      path: `dish/${item.name.replace(" ", "-")}`,
      context: {
        item,
      },
    })
  })
}
