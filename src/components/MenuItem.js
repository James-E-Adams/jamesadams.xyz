// @flow

import * as React from "react"
import classnames from "classnames"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import useHover from "react-use-hover"

import type { Item } from "../types"
import { useItemContext } from "../contexts/itemContext"
type Props = {|
  +item?: Item,
|}

function Image({ className, style }) {
  const { pizza } = useStaticQuery(query)
  return (
    <Img
      className={className}
      fixed={pizza.childImageSharp.fixed}
      style={{ position: "absolute", ...style }}
    />
  )
}

const query = graphql`
  query {
    pizza: file(relativePath: { eq: "food/pizza.jpg" }) {
      childImageSharp {
        fixed(width: 350) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const linkFromName = name => `/dish/${name.replace(" ", "-")}`

function MenuItem({ className, item }: Props) {
  const { name, description, time, image } = item
  const [isHovering, hoverProps] = useHover()
  const { item: contextItem, setItem } = useItemContext()
  React.useEffect(() => {
    if (item !== contextItem && isHovering) {
      console.log("setting to item ", item.name) //TODO
      setItem(item)
    }
  }, [isHovering])

  return (
    <div {...hoverProps} className={classnames("relative", className)}>
      <Link className="underline" to={linkFromName(name)}>
        <span> {name} </span>
        {time && <span> ({time}) </span>}
      </Link>
      <div className="text-sm"> {description} </div>
    </div>
  )
}

export default MenuItem
