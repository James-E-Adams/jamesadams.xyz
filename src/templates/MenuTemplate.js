/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import "../styles/layout.css"
import Menu from "../components/Menu"
import SEO from "../components/seo"

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
