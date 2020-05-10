const dinner = require("./dishes/dinner")
const breakfast = require("./dishes/breakfast")
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const createDishPage = item => {
    createPage({
      component: path.resolve(`./src/templates/ItemTemplate.js`),
      path: `dish/${item.name.replace(" ", "-")}`,
      context: {
        item,
      },
    })
  }

  dinner.forEach(createDishPage)
  breakfast.forEach(createDishPage)
}
