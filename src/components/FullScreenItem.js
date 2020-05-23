// @flow

import * as React from "react"
// import classnames from "classnames"
import { Link } from "gatsby"
import type { Item } from "src/types"
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
  return (
    <div>
      <div className="w-full pt-4 px-8 flex items-center justify-between">
        <Link to="/" className="underline">
          Back
        </Link>
        <div className="font-bold text-xl"> {name} </div>
        <div />
      </div>
      <div
        className="flex flex-wrap justify-between px-16 py-16"
        style={{ height: 800 }}
      >
        <div>
          <div> {description} </div>
          <div className="mt-2"> Takes {time} to cook. </div>
        </div>
        {item.image && (
          <div>
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
