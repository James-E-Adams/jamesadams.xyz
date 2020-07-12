// @flow

import * as React from "react"

import { graphql } from "gatsby"
import StandardTemplate from "./Standard"

type Props = {|
  +className?: string,
|}

function Post({ data, className }: Props) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <StandardTemplate>
      <div className="flex justify-center mt-20">
        <div className="w-4/5">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </StandardTemplate>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

export default Post
