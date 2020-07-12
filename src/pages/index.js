// @flow

import * as React from "react"
import classnames from "classnames"

type Props = {|
  +className?: string,
|}

function Index({ className }: Props) {
  return <div className={classnames("", className)}> Hello World</div>
}

export default Index
