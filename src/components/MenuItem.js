// @flow

import * as React from "react"
import classnames from "classnames"

import type { Item } from "../types"
type Props = {|
  +item?: Item,
|}

function MenuItem({ className, item }: Props) {
  const { name, description, time } = item
  return (
    <div className={classnames("", className)}>
      <div>
        <span> {name} </span>
        {time && <span> ({time}) </span>}
      </div>
      <div className="text-sm"> {description} </div>
    </div>
  )
}

export default MenuItem
