/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import "src/styles/layout.css"
import Menu from "src/components/Menu"
import SEO from "src/components/seo"

const MenuTemplate = ({ pageContext }) => {
  if (!pageContext) return null
  const { breakfast, dinner, snacks } = pageContext
  return (
    <>
      <SEO />
      <Menu breakfast={breakfast} dinner={dinner} snacks={snacks} />
    </>
  )
}

export default MenuTemplate
