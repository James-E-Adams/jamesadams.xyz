// @flow

import * as React from "react"
import classnames from "classnames"
import SEO from "src/components/seo"
import Header from "src/components/Header"

type Props = {|
  +className?: string,
|}

function Index({ className }: Props) {
  return (
    <div
      className={classnames("min-h-screen", className)}
      style={{ background: "linear-gradient(#ffafbd, #ffc3a0)" }}
    >
      <SEO />
      <Header />
    </div>
  )
}

export default Index
