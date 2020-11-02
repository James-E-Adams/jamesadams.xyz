// @flow

import * as React from "react"
import classnames from "classnames"

type Props = {|
  +className?: string,
  +children?: React.Node,
|}

export default function ContentContainer({ className, children }: Props): React.Node {
  return (
    <div className="flex justify-center">
      <div className={classnames("w-4/5 mt-10 max-w-lg", className)}>
        {children}
      </div>
    </div>
  )
}
