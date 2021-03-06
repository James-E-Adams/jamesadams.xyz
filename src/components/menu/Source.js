// @flow

import * as React from "react"
import classnames from "classnames"

type Props = {|
  +source?: string,
  +className: string,
|}

function Source({ source, className }: Props): React.Node {
  if (!source) return null
  return source.includes("http") ? (
    <a
      href={source}
      target="_blank"
      rel="noopener noreferrer"
      className={classnames("underline", className)}
    >
      Source
    </a>
  ) : (
    <div>
      <span className="font-semibold"> Source: </span> {source}
    </div>
  )
}

export default Source
