const path = require(`path`)

const dinner = require("./dishes/dinner")
const breakfast = require("./dishes/breakfast")
const snacks = require("./dishes/snacks")

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
  const meals = [dinner, breakfast, snacks]
  meals.forEach(dishes => dishes.forEach(createDishPage))
  createPage({
    component: path.resolve("./src/templates/MenuTemplate.js"),
    path: "/",
    context: {
      dinner,
      breakfast,
      snacks,
    },
  })
}
