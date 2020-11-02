// @flow

import * as React from "react"
import classnames from "classnames"
import { useItemContext } from "src/contexts/menu/itemContext"
import { useIsMobile } from "src/lib/hooks/useBreakpoint"

type Props = {|
  +className?: string,
  +style?: Object,
|}

function ColumnThree({ className, style }: Props): React.Node {
  const { item } = useItemContext()
  const isMobile = useIsMobile()
  if (!item || isMobile) return null
  return (
    <div style={style} className={classnames("", className)}>
      {item.image && (
        <img
          src={`/food/${item.image}`}
          alt={item.title}
          style={{ width: 300 }}
        />
      )}
    </div>
  )
}

export default ColumnThree
