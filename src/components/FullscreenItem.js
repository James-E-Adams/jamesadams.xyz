// @flow

import * as React from "react"
import classnames from "classnames"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import type { Item } from "../types"
import { useItemContext } from "../contexts/itemContext"
type Props = {|
  +item?: Item,
|}

function FullScreenItem({ className, item }: Props) {
  const { name, description, time, image } = item
  return (
    <div className={classnames("", className)}>
      <div className="w-full pt-4 px-8 flex items-center justify-between">
        <Link to="/" className="underline">
          Back
        </Link>
        <div className="font-bold text-xl"> {name} </div>
        <div />
      </div>
      <div className="pl-8 mt-8">
        <div> {description} </div>
        <div className="mt-2"> Takes {time} to cook. </div>
      </div>
    </div>
  )
}

export default FullScreenItem
