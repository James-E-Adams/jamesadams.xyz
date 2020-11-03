// @flow

import * as React from "react"

import { Link as BaseLink } from "gatsby"
import classnames from "classnames"
import ChefSvg from "src/components/menu/assets/cooking_dark.inline.svg"

type Props = {|
  +className?: string,
  +to?: string,
  +currentRoute?: string,
  +component?: React.ElementType,
  +children?: React.Node,
|}

function Link({
  className,
  component: Component = BaseLink,
  currentRoute,
  to,
  ...props
}: Props) {
  return (
    <div className="flex justify-center items-center pr-8">
      {/* $FlowFixMe too lazy to fix this if I'm not getting paid for it */}
      <Component
        className={classnames(
          "font-semibold text-lg flex items-center",
          to === currentRoute && "text-green-700",
          className
        )}
        to={to}
        {...props}
      />
    </div>
  )
}

function Header({ className, currentRoute }: Props): React.Node {
  return (
    <div
      className={classnames(
        "flex h-20 pl-4 overflow-auto border-b md:border-none relative",
        className
      )}
    >
      <Link component="div" currentRoute={currentRoute}>
        James
      </Link>
      <Link currentRoute={currentRoute} to="/about">
        About
      </Link>
      <Link currentRoute={currentRoute} to="/words">
        Words
      </Link>
      <Link currentRoute={currentRoute} to="/projects">
        Projects
      </Link>
      <Link currentRoute={currentRoute} to="/talks">
        Talks
      </Link>
      <Link
        currentRoute={currentRoute}
        className="flex items-center"
        to="/menu"
      >
        <ChefSvg className="w-8 h-8 mr-2" />
        Menu
      </Link>
    </div>
  )
}

export default Header
