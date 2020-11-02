/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import "src/styles/base.css"
import "src/styles/reset.css"
import Menu from "src/components/menu/Menu"
import SEO from "src/components/seo"
import "src/lib/fontAwesome"

const MenuTemplate = ({ pageContext }) => {
  if (!pageContext) return null
  const { breakfast, dinner, snacks } = pageContext
  return (
    <>
      <SEO title="Menu" />
      <Menu breakfast={breakfast} dinner={dinner} snacks={snacks} />
    </>
  )
}

export default MenuTemplate
