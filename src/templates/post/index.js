// @flow

import * as React from "react"

import { graphql } from "gatsby"
import StandardTemplate from "../Standard"

type Props = {|
  +className?: string,
|}

function Post({ data, className }: Props) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <StandardTemplate route="/words">
      <div className="flex justify-center mt-16">
        <div className="w-4/5">
          <h2 className="text-4xl font-bold mb-2">{frontmatter.title}</h2>
          <h1>{frontmatter.date}</h1>
          <div className="mt-6" dangerouslySetInnerHTML={{ __html: html }} />
          <hr />
          <div className="mb-10">
            Thanks for reading! Feel free to drop me a line at{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:hello@jamesadams.xyz"
            >
              hello@jamesadams.xyz
            </a>{" "}
            and let me know your thoughts!
          </div>
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
