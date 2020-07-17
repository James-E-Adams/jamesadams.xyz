// @flow

import * as React from "react"

import { graphql, Link } from "gatsby"
import StandardTemplate from "src/templates/Standard"
import ContentContainer from "../components/ContentContainer"

type Props = {|
  +className?: string,
|}

function Post({ data, className }: Props) {
  const { allMarkdownRemark } = data
  return (
    <StandardTemplate route="/words">
      <ContentContainer>
        <div className="text-3xl mb-10 text-center">Words</div>
        <div className="text-md mb-20">
          I'm in the progress of migrating my (very) old content from medium.
          For the time being, you can find it{" "}
          <a
            rel="noopener noreferrer"
            href="https://medium.com/@jamesadams0"
            target="_blank"
            className="font-bold"
          >
            here
          </a>
          .
        </div>
        <div>
          {allMarkdownRemark.edges.map(({ node }) => (
            <div>
              <Link to={node.frontmatter.path} key={node.frontmatter.path}>
                <span className="font-semibold pr-2">
                  {new Date(node.frontmatter.date).toLocaleDateString()}:
                </span>
                {node.frontmatter.title}
              </Link>
            </div>
          ))}
        </div>
      </ContentContainer>
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
