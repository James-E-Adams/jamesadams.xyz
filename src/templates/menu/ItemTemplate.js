import React from "react"

import "src/styles/base.css"
import "src/styles/reset.css"
import FullScreenItem from "src/components/menu/FullScreenItem"
import BorderContainer from "src/components/menu/BorderContainer"
import "src/lib/fontAwesome"
import SEO from "src/components/seo"

const ItemTemplate = props => {
  const item = props.pageContext && props.pageContext.item
  if (!item) return null
  return (
    <>
      <SEO title={`Menu - ${item.name}`} />
      <div className="bg-green-200 sm:p-4 p-2 min-h-screen">
        {/* todo fix the height of the container not being full screen */}
        <BorderContainer className="w-full sm:p-4 p-2 h-full">
          <FullScreenItem item={item} />
        </BorderContainer>
      </div>
    </>
  )
}

export default ItemTemplate
