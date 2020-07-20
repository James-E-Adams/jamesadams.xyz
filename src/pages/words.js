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
        <div className="line-through text-md mb-5">
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
        <div className="mb-20">
          Ok ok I finally did it 😅. Took me a while but pretty happy to have
          control over my own content.
        </div>
        <div>
          {allMarkdownRemark.edges.map(({ node }) => (
            <div className="mb-8" key={node.frontmatter.path}>
              <Link to={node.frontmatter.path} className="text-xl">
                {node.frontmatter.title}
              </Link>
              <div className="pr-2 text-sm">
                {new Date(node.frontmatter.date).toDateString()}
              </div>
            </div>
          ))}
        </div>
      </ContentContainer>
    </StandardTemplate>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
