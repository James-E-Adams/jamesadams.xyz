// @flow

import * as React from "react"
import classnames from "classnames"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import type { Item } from "../types"
import { useItemContext } from "../contexts/itemContext"
type Props = {|
  +item?: Item,
|}

function FullScreenItem({ className, item }: Props) {
  const { name, description, time, image } = item
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

export default FullScreenItem
