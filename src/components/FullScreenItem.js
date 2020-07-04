// @flow

import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import type { Item } from "src/types"
import Source from "./Source"
import { useIsMobile } from "src/lib/hooks/useBreakpoint"
type Props = {|
  +item?: Item,
|}

function FullScreenItem({ className, item }: Props) {
  const {
    name,
    description,
    time,
    ingredients,
    instructions,
    // image
  } = item
  const isMobile = useIsMobile()

  return (
    <div>
      <div className="sm:px-8 px-2">
        <div className="w-full pt-2 flex items-center justify-between border-b-2 border-black">
          <Link to="/" className="underline w-16">
            <FontAwesomeIcon icon="arrow-left" />
          </Link>
          <div className="font-bold text-xl"> {name} </div>
          <div className="w-16" />
        </div>
      </div>
      <div
        className="px-8 sm:py-16 pt-4 overflow-scroll"
        style={isMobile ? { minHeight: "100vh" } : { height: 800 }}
      >
        {Boolean(item.image && isMobile) && (
          <div className="py-4">
            <img
              src={`/food/${item.image}`}
              alt={item.title}
              style={{ width: 500 }}
            />
          </div>
        )}
        <div>
          <div className="mb-6"> {description} </div>
          <div className="mb-4">
            Takes <span className="font-semibold">{time}</span> to cook.
          </div>
          <Source source={item.source} className="mt-16" />

          {ingredients && (
            <div className="mt-10">
              <div className="font-bold"> Ingredients </div>
              <ul className="list-disc">
                {ingredients.map((ingredient, index) => (
                  <li key={index}> {ingredient} </li>
                ))}
              </ul>
            </div>
          )}
          {instructions && (
            <div>
              <div className="font-bold"> Instructions </div>
              <ul className="list-decimal">
                {instructions.map((instruction, index) => (
                  <li key={index}> {instruction} </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {Boolean(item.image && !isMobile) && (
          <div className="mt-16">
            <img
              src={`/food/${item.image}`}
              alt={item.title}
              style={{ width: 500 }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default FullScreenItem
