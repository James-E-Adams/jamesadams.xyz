import React from "react"

import "src/styles/layout.css"
import FullScreenItem from "src/components/FullScreenItem"

const ItemTemplate = props => {
  const item = props.pageContext && props.pageContext.item
  if (!item) return null
  return (
    <div className="bg-green-200 w-screen min-h-screen">
      <FullScreenItem item={item} />
    </div>
  )
}

export default ItemTemplate
