// @flow

import * as React from "react"
import classnames from "classnames"
import SEO from "src/components/seo"
import Header from "src/components/Header"
type Props = {|
  +className?: string,
  +children?: React.Node,
|}

function Standard({ className, children }: Props) {
  return (
    <div
      className={classnames("min-h-screen", className)}
      style={{ background: "linear-gradient(#ffafbd, #ffc3a0)" }}
    >
      <SEO />
      <Header />
      {children}
    </div>
  )
}

export default Standard
