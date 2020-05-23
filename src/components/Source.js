// @flow

import * as React from "react"
import classnames from "classnames"

type Props = {|
  +source?: string,
  +className: string,
|}

function Source({ source, className }: Props) {
  if (!source) return null
  return source.includes("http") ? (
    <a href={source} className={classnames("underline", className)}>
      Source
    </a>
  ) : (
    <div> Source: {source} </div>
  )
}

export default Source
