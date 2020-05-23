const path = require(`path`)

const dinner = require("./dishes/dinner")
const breakfast = require("./dishes/breakfast")
const snacks = require("./dishes/snacks")
const events = require("./events/events")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const createDishPage = item => {
    createPage({
      component: path.resolve(`./src/templates/ItemTemplate.js`),
      path: `dish/${item.name.replace(/\s/gi, "-")}`,
      context: {
        item,
      },
    })
  }
  const dishes = [...dinner, ...breakfast, ...snacks]
  dishes.forEach(createDishPage)

  createPage({
    component: path.resolve("./src/templates/MenuTemplate.js"),
    path: "/",
    context: {
      dinner,
      breakfast,
      snacks,
    },
  })

  events.forEach(event =>
    createPage({
      component: path.resolve("./src/templates/EventTemplate.js"),
      path: `event/${event.name.replace(/\s/gi, "-")}`,
      context: {
        event,
        dishes: event.dishes.map(id => dishes.find(dish => dish.id === id)),
      },
    })
  )
  createPage({
    component: path.resolve("./src/templates/AllEventsTemplate.js"),
    path: "/events",
    context: {
      events,
    },
  })
}
