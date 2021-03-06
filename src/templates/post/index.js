// @flow

import * as React from "react"

import { graphql } from "gatsby"
import StandardTemplate from "../Standard"

type Props = {|
  +data: any,
  +className?: string,
|}

function Post({ data, className }: Props): React.Node {
  const { markdownRemark } = data
  const { frontmatter, html, fields } = markdownRemark
  const metaTags = [
    { name: "twitter:label1", content: "Reading Time" },
    { name: "twitter:data1", content: fields.readingTime.text },
  ]
  const seoProps = {
    title: frontmatter.title,
    description: frontmatter.description,
    metaTags: metaTags,
    metaImagePath: frontmatter.hasMetaImage
      ? `/meta${frontmatter.path}.jpg`
      : `/meta/words/me.jpg`,
  }
  return (
    <StandardTemplate seoProps={seoProps} route="/words">
      <div className="flex justify-center mt-16">
        <div className="md:max-w-2xl w-4/5">
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

export const pageQuery: any = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
        hasMetaImage
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`

export default Post
