// @flow

import * as React from "react"

import { graphql, Link } from "gatsby"
import StandardTemplate from "src/templates/Standard"
import ContentContainer from "../components/ContentContainer"

type Props = {|
  +className?: string,
  data: any,
|}

function Post({ data, className }: Props): React.Node {
  const { allMarkdownRemark } = data

  return (
    <StandardTemplate seoProps={{ title: "Words" }} route="/words">
      <ContentContainer>
        <div>
          {allMarkdownRemark.edges.map(({ node }) => (
            <div className="mb-8" key={node.frontmatter.path}>
              <Link to={node.frontmatter.path} className="text-xl">
                {node.frontmatter.title}
              </Link>
              <div className="pr-2 text-sm">
                {new Date(node.frontmatter.date).toDateString()}
                <span className="ml-8">({node.fields.readingTime.text})</span>
              </div>
            </div>
          ))}
        </div>
      </ContentContainer>
    </StandardTemplate>
  )
}

export const pageQuery: any = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            title
            date
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`
export default Post
