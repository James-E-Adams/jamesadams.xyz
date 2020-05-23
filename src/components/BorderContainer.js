// @flow

import * as React from "react"
import classnames from "classnames"

type Props = {|
  +className?: string,
|}

const borderStyle = {
  borderStyle: "ridge",
  boxShadow: "0 0 0 2rem grey",
}

function BorderContainer({ className, children }: Props) {
  return (
    <div
      className={classnames(
        "border-dashed border-24 border-white p-4 rounded-lg",
        className
      )}
      style={borderStyle}
    >
      {children}
    </div>
  )
}

export default BorderContainer
