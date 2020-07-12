// @flow

import * as React from "react"
import { Link as BaseLink } from "gatsby"
import classnames from "classnames"
import ChefSvg from "src/components/menu/assets/cooking_dark.inline.svg"

type Props = {|
  +className?: string,
|}

function Link({ className, ...props }) {
  return (
    <BaseLink
      className={classnames(
        "font-semibold text-lg flex items-center",
        className
      )}
      {...props}
    />
  )
}

function Header({ className }: Props) {
  return (
    <div className={classnames("flex h-20 pl-4", className)}>
      <Link className="pr-8 " to="/">
        James
      </Link>
      <Link className="pr-8" to="/about">
        About
      </Link>
      <Link className="pr-8 flex items-center" to="/menu">
        <ChefSvg className="w-8 h-8 mr-2" />
        Menu
      </Link>
      <Link className="pr-8" to="/words">
        Words
      </Link>
    </div>
  )
}

export default Header
