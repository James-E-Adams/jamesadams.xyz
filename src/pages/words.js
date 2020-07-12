// @flow

import * as React from "react"

import { graphql, Link } from "gatsby"
import StandardTemplate from "src/templates/Standard"

type Props = {|
  +className?: string,
|}

function Post({ data, className }: Props) {
  const { allMarkdownRemark } = data
  return (
    <StandardTemplate>
      <div className="pl-4">
        {allMarkdownRemark.edges.map(({ node }) => (
          <Link to={node.frontmatter.path} key={node.frontmatter.path}>
            <span className="font-semibold pr-2">
              {new Date(node.frontmatter.date).toLocaleDateString()}:
            </span>
            {node.frontmatter.title}
          </Link>
        ))}
      </div>
    </StandardTemplate>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`
export default Post
