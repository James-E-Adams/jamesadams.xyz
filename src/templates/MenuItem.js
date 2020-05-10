/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "../styles/layout.css"
import FullScreenItem from "../components/FullScreenItem"

const MenuItem = props => {
  console.log({ props })
  const item = props.pathContext && props.pathContext.item
  if (!item) return null //TODO loader
  return (
    <div className="bg-green-200 w-screen min-h-screen">
      <FullScreenItem item={item} />
    </div>
  )
}

export default MenuItem
