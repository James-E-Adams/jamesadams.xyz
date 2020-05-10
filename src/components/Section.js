// @flow

import * as React from "react"
import classnames from "classnames"
import type { Item } from "../types"
import MenuItem from "./MenuItem"
type Props = {|
  +className?: string,
  +title?: string,
  +items: Array<Item>,
|}

function Section({ className, title, items }: Props) {
  return (
    <div className={classnames("", className)}>
      <h3> {title} </h3>
      {items &&
        items.map((item, index) => (
          <MenuItem
            item={item}
            key={item.name}
            className={index !== 0 && "mt-2"}
          />
        ))}
    </div>
  )
}

export default Section
