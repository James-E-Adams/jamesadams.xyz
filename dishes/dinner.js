const jeruFy = pgNo => `Jerusalem by Ottolenghi, pg ${pgNo}.`

const phoebe = "Phoebe's brain"

module.exports = [
  {
    id: 1,
    name: "Shakshuka",
    description: "Tomato-ey, peppery goodness.",
    source: jeruFy(66),
    time: "30 minutes",
    image: "shakshuka.jpg",
  },
  {
    id: 2,
    name: "Homemade Pizza",
    description: "I guess everything on this list is homemade.",
    source: "https://www.thermo.kitchen/basic-thermomix-pizza-dough-recipe/",
    image: "pizza.jpg",
    time: "30 minutes",
  },
  {
    id: 3,
    name: "Basmati & Wild Rice with Chickpeas, Currants & Herbs",
    description: "Rice but yummier and more effort.",
    source: jeruFy(106),
    time: "45 minutes",
  },
  {
    id: 4,
    name: "Hot & Sour Soup",
    description:
      "It's in the name. Tofu, fungus and egg to make it thick, like chinese take-away.",
    source: phoebe,
    time: "20 minutes",
  },
  {
    id: 5,
    name: "Japanese Curry",
    description: "Like the curry that comes with Katsu but vego.",
    source: phoebe,
    time: "1 hour",
  },
  {
    id: 6,
    name: "Okonomiyaki",
    description: "Cabbage, carroty pancake. Optional noodles/egg.",
    image: "okonomiyaki.jpg",
    source:
      "https://www.recipecommunity.com.au/main-dishes-vegetarian-recipes/japanese-okonomiyaki-vegetable-pancake/8tn57dr7-2ed4b-291708-cfcd2-h26z4zye",
  },
  {
    id: 7,
    name: "Summer Squash and Basil pasta",
    description: "Simple but yum.",
    source:
      "https://www.bonappetit.com/recipe/summer-squash-and-basil-pasta/amp",
    time: "20 minutes",
  },
  {
    id: 8,
    name: "Silken tofu mushroom pasta",
    description: "It's in the name.",
    source:
      "https://www.discoverdelicious.org/food-blog/creamy-mushroom-linguine",
    time: "30 minutes",
  },
  {
    id: 9,
    name: "Stuffed peppers",
    description:
      "One of ottolenghi's finest. We haven't worked out a vego version yet.",
    source: jeruFy(165),
    time: "1.5 hours",
    image: "stuffed_peppers.jpg",
  },
  {
    id: 10,
    name: "Stir fried Daikin",
    description: "Phoebe classic.",
    source: phoebe,
    time: "15 minutes",
  },
  {
    id: 11,
    name: "Fish, baked/pan fried",
    description:
      "Salmon with crispy skin, or oat-crumbed, spicy ling are the top picks.",
    source: phoebe,
    time: "20-30 minutes",
  },
  {
    id: 12,
    name: "Latkes",
    description: "It's like you fried a potato, and went to heaven.",
    source: "Probably my mum.",
    time: "20-30 minutes",
    image: "latkes.jpg",
  },
  {
    id: 13,
    name: "Kimchi Fried Rice",
    description:
      "Use leftover rice. James thinks he didn't get any kimchi but we ate it all in the rice.",
    source: phoebe,
    time: "10 minutes",
  },
  {
    id: 14,
    name: "Fried prawns",
    description:
      "On first eating it, James asked 'Who knew you could cook seafood at home?'. Delicious.",
    source: phoebe,
    time: "20 minutes",
  },
  {
    id: 15,
    name: "Eggplant pasta",
    description:
      "From somewhere. Roasted Eggplant + Pasta. What could go wrong?",
    source: phoebe,
    time: "40 minutes",
  },
  {
    id: 16,
    name: "Fried tofu cubes",
    description:
      "Our most popular entree. Stolen from NZ Nicole. Salt, oil and chili. That picture isn't very glamourous but I assure you, they're delicious.",
    time: "30 minutes",
    source: "Our friend, Nicole.",
    image: "fried-tofu.jpg",
    instructions: [
      "Drain the tofu from the package, and squash between some plates and paper towel to remove excess water. The drier the tofu, the easier it's going to be to coat and fry.",
      "After the tofu has been sitting for 10-20 minutes between the plates and towel, cut into 3-4cm cubes. You can go bigger if feeling lazy.",
      "Prepare a plastic bag/bowl with some corn starch mixed with a bit of salt and white pepper to taste - and coat all the tofu. I usually do it in a bag with all the tofu and then shake it around, trying not to break up the cubes. You'll pretty quickly work out the right quantity of corn starch, but start with 2tbsp and if it's not enough to coat all the tofu, add more.",
      "Shallow pan fry, rotating often until they're golden brown all over. Serve immediately with some kind of dipping sauce.",
    ],
    ingredients: [
      "A packet of firm tofu (ez mode) or a slightly softer tofu (hard mode).",
      "Salt/White Pepper",
      "Corn Starch",
      "Dipping sauce: Any combo of soy sauce/chilli will work.",
      "Some kind of frying oil - sunflower/vegetable/canola all work.",
    ],
  },
  {
    id: 17,
    name: "Ma-po tofu",
    description: "Spicy tofu. Yet to attempt sans mince meat.",
    time: "20 minutes",
    source: "ummm",
  },
  {
    id: 18,
    name: "Butternut squash with pumpkin seeds and cardamom. ",
    description: "",
    time: "1 hour",
    image: "pumpkin.jpg",
    source: "Ottolenghi book, TODO",
  },
  {
    id: 19,
    name: "Mussels",
    description: "Fresh from QV Market.",
    time: "30 min",
    image: "mussels.jpg",
    source: phoebe,
  },
  {
    id: 20,
    name: "DIY Rice Vermicelli with extras",
    description: "Like going to a vietnames restaurant but more food.",
    time: "30 minutes",
    image: "vermicelli.jpg",
    source: phoebe,
  },
  {
    id: 21,
    name: "Chinese Fried Green Beans with Garlic",
    description: "Good with or sans bean curd.",
    time: "30 minutes",
    image: "green-beans.jpg",
    source: phoebe,
  },
  {
    id: 22,
    name: "Curry Laksa",
    description: "I didn't think it would be this easy.",
    time: "1.5 Hours",
    image: "laksa.jpg",
    source: "Seb!",
  },
]
