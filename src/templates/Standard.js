// @flow

import * as React from "react"
import classnames from "classnames"
import SEO from "src/components/seo"
import Header from "src/components/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "src/styles/base.css"
import "src/styles/reset.css"
import "src/lib/fontAwesome"

type Props = {|
  +className?: string,
  +children?: React.Node,
  +route?: string,
  +seoProps?: {},
|}

const { useState } = React
const rightArrowStyle = {
  top: "5.5rem",
  right: 10,
}
const leftArrowStyle = {
  top: "5.5rem",
  left: 10,
}

const ScrollText = () => (
  <div className="text-pink-800"> No silly, scroll the nav! </div>
)

function Standard({ className, children, route, seoProps }: Props): React.Node {
  const [showScrollMessage, setShowScrollMessageBase] = useState(false)

  const setShowScrollMessage = () => {
    setShowScrollMessageBase(true)
    setTimeout(() => setShowScrollMessageBase(false), 3000)
  }

  return (
    <div
      className={classnames("min-h-screen relative", className)}
      style={{ background: "linear-gradient(#ffafbd, #ffc3a0)" }}
    >
      <SEO {...seoProps} />
      <Header currentRoute={route} />
      <div className="absolute block md:hidden" style={leftArrowStyle}>
        <button onClick={setShowScrollMessage.bind(true)}>
          <FontAwesomeIcon icon="arrow-left" />
        </button>

        {showScrollMessage && <ScrollText />}
      </div>
      <div
        className="absolute block md:hidden text-right"
        style={rightArrowStyle}
      >
        <button onClick={setShowScrollMessage.bind(true)}>
          <FontAwesomeIcon icon="arrow-right" />
        </button>
        {showScrollMessage && <ScrollText />}
      </div>
      {children}
    </div>
  )
}

export default Standard
