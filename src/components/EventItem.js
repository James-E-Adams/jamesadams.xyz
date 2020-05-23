// @flow

import * as React from "react"
// import classnames from "classnames"
import type { Item } from "src/types"
type Props = {|
  +item?: Item,
|}

function EventItem({ className, item }: Props) {
  const { name, description, time, image } = item
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
          <a href={item.source} className="underline mt-16">
            Source
          </a>
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
