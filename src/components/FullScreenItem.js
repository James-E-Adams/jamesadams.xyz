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
    // image
  } = item
  const isMobile = useIsMobile()

  return (
    <div>
      <div className="w-full pt-2 sm:px-8 px-2 flex items-center justify-between">
        <Link to="/" className="underline w-16">
          <FontAwesomeIcon icon="arrow-left" />
        </Link>
        <div className="font-bold text-xl"> {name} </div>
        <div className="w-16" />
      </div>
      <div
        className="px-8 sm:py-16 pt-4"
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
