const jeruFy = pgNo => `Jerusalem by Ottolenghi, pg ${pgNo}.`

const phoebe = "Phoebe's brain"

module.exports = [
  {
    name: "Shakshuka",
    description: "Tomato-ey, peppery goodness.",
    source: jeruFy(66),
    time: "30 minutes",
    image: "shakshuka.jpg",
  },
  {
    name: "Homemade Pizza",
    description: "I guess everything on this list is homemade. ",
    source: "https://www.thermo.kitchen/basic-thermomix-pizza-dough-recipe/",
    image: "pizza.jpg",
    time: "30 minutes",
  },
  {
    name: "Basmati & Wild Rice with Chickpeas, Currants & Herbs",
    description: "Rice but yummier and more effort",
    source: jeruFy(106),
    time: "45 minutes",
  },
  {
    name: "Hot & Sour Soup",
    description:
      "It's in the name. Tofu, fungus and egg to make it thick, like chinese take-away.",
    source: phoebe,
    time: "20 minutes",
  },
  {
    name: "Japanese Curry",
    description: "Like the curry that comes with Katsu but vego.",
    source: phoebe,
    time: "1 hour",
  },
  {
    name: "Okonomiyaki",
    description: "Cabbage, carroty pancake. Optional noodles/egg.",
    image: "okonomiyaki.jpg",
    source:
      "https://www.recipecommunity.com.au/main-dishes-vegetarian-recipes/japanese-okonomiyaki-vegetable-pancake/8tn57dr7-2ed4b-291708-cfcd2-h26z4zye",
  },
  {
    name: "Summer Squash and Basil pasta",
    description: "Simple but yum.",
    source:
      "https://www.bonappetit.com/recipe/summer-squash-and-basil-pasta/amp",
    time: "20 minutes",
  },
  {
    name: "Silken tofu mushroom pasta",
    description: "It's in the name.",
    source:
      "https://www.discoverdelicious.org/food-blog/creamy-mushroom-linguine",
    time: "30 minutes",
  },
  {
    name: "Stuffed peppers",
    description:
      "One of ottolenghi's finest. We haven't worked out a vego version yet.",
    source: jeruFy(165),
    time: "1.5 hours",
    image: "stuffed_peppers.jpg",
  },
  {
    name: "Stir fried Daikin",
    description: "Phoebe classic",
    source: phoebe,
    time: "15 minutes",
  },
  {
    name: "Fish, baked/pan fried",
    description:
      "Salmon with crispy skin, or oat-crumbed, spicy ling are the top picks.",
    source: phoebe,
    time: "20-30 minutes",
  },
  {
    name: "Latkes",
    description: "It's like you fried a potato, and went to heaven.",
    source: "Mum or thermomix recipe",
    time: "20-30 minutes",
    image: "latkes.jpg",
  },
  {
    name: "Kimchi Fried Rice",
    description:
      "Use leftover rice. James thinks he didn't get any kimchi but we ate it all in the rice.",
    source: phoebe,
    time: "10 minutes",
  },
  {
    name: "Fried prawns",
    description:
      "On first eating it, James asked 'Who knew you could cook seafood at home?'. Delicious.",
    source: phoebe,
    time: "20 minutes",
  },
  {
    name: "Eggplant pasta",
    description:
      "From somewhere. Roasted Eggplant + Pasta. What could go wrong?",
    source: phoebe,
    time: "40 minutes",
  },
  {
    name: "Fried tofu cubes",
    description:
      "Our most popular entree. Stolen from NZ Nicole. Salt, oil and chili.",
    time: "30 minutes",
    source: "Nicole (NZ)",
    image: "fried-tofu.jpg",
  },
  {
    name: "Ma-po tofu",
    description: "Spicy tofu. Yet to attempt sans mince meat.",
    time: "20 minutes",
  },
  {
    name: "Butternut squash with pumpkin seeds and cardamom",
    description: "",
    time: "1 hour",
    image: "pumpkin.jpg",
  },
  {
    name: "Mussels",
    description: "Fresh from QV Market.",
    time: "30 min",
    image: "mussels.jpg",
  },
  {
    name: "DIY Rice Vermicelli with extras",
    description: "Like going to a vietnames restaurant but more food.",
    time: "30 minutes",
    image: "vermicelli.jpg",
  },
  {
    name: "Chinese Fried Green Beans with Garlic",
    description: "Good with or sans bean curd.",
    time: "30 minutes",
    image: "green-beans.jpg",
  },
]
