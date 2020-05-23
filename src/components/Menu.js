// @flow

import * as React from "react"
import classnames from "classnames"

import Section from "./Section"
import ColumnThree from "./ColumnThree"
import { ItemContext } from "src/contexts/itemContext"

type Props = {|
  +className?: string,
|}

const { useMemo, useState } = React

function useItemState() {
  const [item, setItem] = useState(null)
  const itemContextValue = useMemo(() => ({ item, setItem }), [item, setItem])
  return itemContextValue
}

const imagePosition = { top: 50, right: 50 }
function Menu({ className, dinner, breakfast, snacks }: Props) {
  const itemState = useItemState()
  return (
    <ItemContext.Provider value={itemState}>
      <div
        className={classnames(
          "w-screen bg-green-200 min-h-screen relative",
          className
        )}
      >
        <h1 className="w-full text-center pt-2"> Menu</h1>
        <div className="flex px-4 -mt-4">
          <div>
            <Section
              title="Breakfast"
              className="w-80 mt-4 mr-4"
              items={breakfast}
            />
            <Section
              title="Lunch/Dinner"
              className="w-80 mt-4"
              items={dinner}
            />
            <Section title="Snacks" className="mt-4 w-80" items={snacks} />
          </div>
          <ColumnThree className="fixed" style={imagePosition} />
        </div>
      </div>
    </ItemContext.Provider>
  )
}

export default Menu
