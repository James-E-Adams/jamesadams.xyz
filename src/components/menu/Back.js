// @flow

import * as React from "react"
import { Link } from "gatsby"
import classnames from "classnames"
type Props = {|
  +className?: string,
|}

function Back({ className, to }: Props) {
  return (
    <Link className={classnames("w-4", className)} to={to}>
      <div> B </div>
      <div> a </div>
      <div> c </div>
      <div> k </div>
    </Link>
  )
}

export default Back
