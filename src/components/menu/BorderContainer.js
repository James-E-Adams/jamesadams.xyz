// @flow

import * as React from "react"
import classnames from "classnames"
import { useIsMobile } from "src/lib/hooks/useBreakpoint"

type Props = {|
  +className?: string,
|}

const borderStyle = {
  borderStyle: "ridge",
  borderColor: "#cdc6f6",
}
const desktopBorderStyle = {
  ...borderStyle,
  boxShadow: "0 0 0 2rem #f6d6c6",
}
const mobileBorderStyle = {
  ...borderStyle,
  boxShadow: "0 0 0 1rem #f6d6c6",
}

function BorderContainer({ className, children }: Props) {
  const isMobile = useIsMobile()
  return (
    <div
      className={classnames(
        "border-dashed sm:border-24 border-16 border-white sm:p-4 p-2 rounded-lg",
        className
      )}
      style={isMobile ? mobileBorderStyle : desktopBorderStyle}
    >
      {children}
    </div>
  )
}

export default BorderContainer
