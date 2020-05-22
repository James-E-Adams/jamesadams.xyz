// @flow

import * as React from "react"
import classnames from "classnames"
import { useItemContext } from "../contexts/itemContext"

type Props = {|
  +className?: string,
  +style?: Object,
|}

function ColumnThree({ className, style }: Props) {
  const { item } = useItemContext()
  if (!item) return null
  return (
    <div style={style} className={classnames("", className)}>
      {item.image && <img src={`/food/${item.image}`} style={{ width: 300 }} />}
    </div>
  )
}

export default ColumnThree
