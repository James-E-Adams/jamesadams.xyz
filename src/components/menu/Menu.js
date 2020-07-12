// @flow

import * as React from "react"
import classnames from "classnames"
import { Link } from "gatsby"

import Section from "./Section"
import ColumnThree from "./ColumnThree"
import { ItemContext } from "src/contexts/menu/itemContext"
import BorderContainer from "./BorderContainer"
import ChefSvg from "./assets/cooking.inline.svg"
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
          "w-screen bg-green-200 min-h-screen relative sm:p-4 p-2",
          className
        )}
      >
        <BorderContainer>
          <div className="w-full flex items-center justify-between sm:pt-2 pt-4 text-3xl mb-8 font-bold">
            <Link className="w-4" to="/">
              Back
            </Link>
            <ChefSvg className="w-16 h-16" />
            <div className="w-4" />
          </div>
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
            <ColumnThree
              className="fixed sm:block hidden"
              style={imagePosition}
            />
          </div>
        </BorderContainer>
      </div>
    </ItemContext.Provider>
  )
}

export default Menu
