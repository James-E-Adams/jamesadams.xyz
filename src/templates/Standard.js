// @flow

import * as React from "react"
import classnames from "classnames"
import SEO from "src/components/seo"
import Header from "src/components/Header"

import "src/styles/base.css"
import "src/styles/reset.css"
type Props = {|
  +className?: string,
  +children?: React.Node,
  +route?: string,
|}

function Standard({ className, children, route }: Props) {
  return (
    <div
      className={classnames("min-h-screen", className)}
      style={{ background: "linear-gradient(#ffafbd, #ffc3a0)" }}
    >
      <SEO />
      <Header currentRoute={route} />
      {children}
    </div>
  )
}

export default Standard
