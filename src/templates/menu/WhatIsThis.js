// @flow

import * as React from "react"
import classnames from "classnames"
import BorderContainer from "src/components/menu/BorderContainer"
import ChefSvg from "src/components/menu/assets/cooking.inline.svg"
import Back from "src/components/menu/Back"
import ContentContainer from "src/components/ContentContainer"

type Props = {|
  +className?: string,
|}

function WhatIsThis({ className }: Props) {
  return (
    <div
      className={classnames(
        "w-screen bg-green-200 min-h-screen relative sm:p-4 p-2",
        className
      )}
    >
      <BorderContainer>
        <div className="min-h-screen">
          <div className="w-full flex items-center justify-between sm:pt-2 pt-4 text-3xl mb-8 font-bold">
            <Back to="/menu" />
            <ChefSvg className="w-16 h-16" />
            <div className="w-4" />
          </div>
          <ContentContainer className="text-lg">
            <div className="text-3xl text-center mb-20"> What is this? </div>
            <div className="mb-10">
              It originated as a way to keep track of all the cool stuff we're
              cooking at home. But then it started to solve the problem of
              "What's for dinner?".
            </div>
            <div className="mb-10">
              I think everyone goes through this. You've cooked a whole bunch of
              tasty stuff in the past, but it gets to 6pm and you have no idea
              what to make for dinner. When you're hungry and tired, it's
              usually easier to make something you've made before - so I usually
              just leaf through this for inspiration.
            </div>

            <div>
              Tech wise, I've basically got Gatsby generating all the pages at
              build time from a couple JSON files. You can see the secret sauce{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
                href="https://github.com/James-E-Adams/jamesadams.xyz/blob/master/gatsby-node.js#L41"
              >
                here
              </a>
              . Should be pretty easy to fork and make your own! If you do
              something cool, please open a PR!
            </div>
          </ContentContainer>
        </div>
      </BorderContainer>
    </div>
  )
}

export default WhatIsThis
