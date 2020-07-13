// @flow

import * as React from "react"
import { Link as BaseLink } from "gatsby"
import classnames from "classnames"
import ChefSvg from "src/components/menu/assets/cooking_dark.inline.svg"

type Props = {|
  +className?: string,
  +currentRoute?: string,
|}

function Link({
  className,
  component: Component = BaseLink,
  currentRoute,
  to,
  ...props
}) {
  return (
    <Component
      className={classnames(
        "font-semibold text-lg flex items-center",
        to === currentRoute && "underline",
        className
      )}
      to={to}
      {...props}
    />
  )
}

function Header({ className, currentRoute }: Props) {
  return (
    <div className={classnames("flex h-20 pl-4", className)}>
      <Link component="div" currentRoute={currentRoute} className="pr-8 ">
        James
      </Link>
      <Link currentRoute={currentRoute} className="pr-8" to="/about">
        About
      </Link>
      <Link
        currentRoute={currentRoute}
        className="pr-8 flex items-center"
        to="/menu"
      >
        <ChefSvg className="w-8 h-8 mr-2" />
        Menu
      </Link>
      <Link currentRoute={currentRoute} className="pr-8" to="/words">
        Words
      </Link>
      <Link currentRoute={currentRoute} className="pr-8" to="/projects">
        Projects
      </Link>
      <Link currentRoute={currentRoute} className="pr-8" to="/talks">
        Talks
      </Link>
    </div>
  )
}

export default Header
