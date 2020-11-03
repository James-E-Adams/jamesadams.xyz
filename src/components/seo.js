//@flow

/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type Meta = {
  name: string,
  content: string,
}

export type Props = {|
  description?: string,
  lang?: string,
  title?: string,
  metaTags?: Array<Meta>,
|}

function SEO({ description = "", lang, title, metaTags }: Props): React.Node {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title
    ? `${site.siteMetadata.title}: ${title}`
    : site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang: lang || "en",
      }}
    >
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={metaTitle} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {metaTags && metaTags.map((meta, idx) => <meta {...meta} key={idx} />)}
    </Helmet>
  )
}

export default SEO
