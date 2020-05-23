// @flow

import * as React from "react"
// import classnames from "classnames"
import type { Item } from "src/types"
import Source from "./Source"
type Props = {|
  +item?: Item,
|}

function EventItem({ className, item }: Props) {
  const { name, description, time, image, source } = item
  return (
    <div>
      <div className="w-full pt-4 px-8 flex items-center justify-center">
        <div className="font-bold text-xl"> {name} </div>
      </div>
      <div
        className="flex flex-wrap justify-between px-16 py-16"
        style={{ height: 500 }}
      >
        <div>
          <div> {description} </div>
          <div className="mt-2"> Takes {time} to cook. </div>
          <Source source={source} className="mt-16" />
        </div>
        {item.image && (
          <div>
            <img src={`/food/${image}`} alt={name} style={{ width: 500 }} />
          </div>
        )}
      </div>
    </div>
  )
}

export default EventItem
