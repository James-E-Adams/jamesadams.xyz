// @flow

import * as React from "react"
import classnames from "classnames"
import { Link } from "gatsby"
import useHover from "react-use-hover"

import type { Item } from "../types"
import { useItemContext } from "../contexts/itemContext"
type Props = {|
  +item?: Item,
|}

const linkFromName = name => `/dish/${name.replace(" ", "-")}`

function MenuItem({ className, item }: Props) {
  const { name, description, time } = item
  const [isHovering, hoverProps] = useHover()
  const { item: contextItem, setItem } = useItemContext()
  React.useEffect(() => {
    if (item !== contextItem && isHovering) {
      setItem(item)
    }
  }, [isHovering, contextItem, item, setItem])

  return (
    <div {...hoverProps} className={classnames("relative", className)}>
      <Link className="underline" to={linkFromName(name)}>
        <span> {name} </span>
        {time && <span> ({time}) </span>}
      </Link>
      <div className="text-sm"> {description} </div>
    </div>
  )
}

export default MenuItem
