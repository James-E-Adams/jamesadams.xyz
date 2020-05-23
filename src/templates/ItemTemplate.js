import React from "react"

import "src/styles/base.css"
import "src/styles/reset.css"
import FullScreenItem from "src/components/FullScreenItem"
import BorderContainer from "../components/BorderContainer"

const ItemTemplate = props => {
  const item = props.pageContext && props.pageContext.item
  if (!item) return null
  return (
    <div className="bg-green-200 p-4 min-h-screen">
      {/* todo fix the height of the container not being full screen */}
      <BorderContainer className="w-full p-4 h-full">
        <FullScreenItem item={item} />
      </BorderContainer>
    </div>
  )
}

export default ItemTemplate
