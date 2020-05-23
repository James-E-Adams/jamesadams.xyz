// @flow

import * as React from "react"
import classnames from "classnames"
// import Img from "gatsby-image"
import { Link } from "gatsby"
import type { Item } from "../types"
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
    <div className={classnames("w-screen min-h-screen relative", className)}>
      <div className="w-full pt-4 px-8 flex items-center justify-between">
        <Link to="/" className="underline">
          Back
        </Link>
        <div className="font-bold text-xl"> {name} </div>
        <div />
      </div>
      <div className="flex flex-wrap justify-between px-16 py-16">
        <div>
          <div> {description} </div>
          <div className="mt-2"> Takes {time} to cook. </div>
        </div>
        {item.image && (
          <div>
            <img
              src={`/food/${item.image}`}
              alt={item.title}
              style={{ width: 300 }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default FullScreenItem
