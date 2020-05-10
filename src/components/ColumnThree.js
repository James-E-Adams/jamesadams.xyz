// @flow

import * as React from "react"
import classnames from "classnames"
import { useItemContext } from "../contexts/itemContext"

type Props = {|
  +className?: string,
|}

function ColumnThree({ className }: Props) {
  const { item } = useItemContext()
  if (!item) return null
  return (
    <div className={classnames("", className)}>
      {item.image && <img src={`/food/${item.image}`} style={{ width: 300 }} />}
    </div>
  )
}

export default ColumnThree
