// @flow

import * as React from "react"
import classnames from "classnames"

import Section from "./Section"
import dinner from "../dinner"
import ColumnThree from "./ColumnThree"
import { ItemContext } from "../contexts/itemContext"
type Props = {|
  +className?: string,
|}

const { useMemo, useState } = React

const breakfast = [
  {
    name: "Porridge",
    description:
      "Thermomix porridge with banana, nut butter, cinammon and berries.",
    time: "10 minutes",
  },
  {
    name: "Pancakes",
    description: "Most likely from a shaker",
    time: "20 minutes",
  },
  {
    name: "Omelette",
    description: "Variety of stuffings. Yummy.",
    time: "20 minutes",
  },
]

function useItemState() {
  const [item, setItem] = useState(null)
  const itemContextValue = useMemo(() => ({ item, setItem }), [item, setItem])
  return itemContextValue
}

function Menu({ className }: Props) {
  const itemState = useItemState()

  return (
    <ItemContext.Provider value={itemState}>
      <div className={classnames("w-screen bg-green-200", className)}>
        <h1 className="w-full text-center pt-2"> Menu de los beps</h1>
        <div className="flex flex-wrap px-4 -mt-4">
          <Section
            title="Breakfast"
            className="w-80 mt-4 mr-4"
            items={breakfast}
          />
          <Section title="Lunch/Dinner" className="w-80 mt-4" items={dinner} />
          <ColumnThree />
        </div>
      </div>
    </ItemContext.Provider>
  )
}

export default Menu
