// @flow

import * as React from "react"
import classnames from "classnames"
import { Link } from "gatsby"
import useHover from "react-use-hover"

import type { Item } from "src/types"
import useBreakpoint from "src/lib/hooks/useBreakpoint"
import { useItemContext } from "src/contexts/itemContext"
type Props = {|
  +item?: Item,
|}

const linkFromName = name => `/dish/${name.replace(/\s/gi, "-")}`

function MenuItem({ className, item }: Props) {
  const breakpoint = useBreakpoint()
  const isMobile = breakpoint === "xs"
  const { name, description, time } = item
  const [isHovering, hoverProps] = useHover()
  const { item: contextItem, setItem } = useItemContext()
  React.useEffect(() => {
    if (isMobile) return
    if (item !== contextItem && isHovering) {
      setItem(item)
    }
    if (item === contextItem && !isHovering) {
      setItem(null)
    }
  }, [isHovering, contextItem, item, setItem, isMobile])

  return (
    <div className={classnames("relative", className)}>
      <div {...(isMobile ? {} : hoverProps)}>
        <Link className="underline font-semibold" to={linkFromName(name)}>
          <span> {name} </span>
          {time && <span> ({time}) </span>}
        </Link>
      </div>
      <div className="text-sm"> {description} </div>
    </div>
  )
}

export default MenuItem
