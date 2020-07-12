import * as React from "react"

import StandardTemplate from "src/templates/Standard"

function About() {
  return (
    <StandardTemplate>
      <div className="flex justify-center">
        <div className="w-4/5 mt-20">
          <div className="text-4xl">Hi I'm James! </div>
          <div className="text-lg">
            <div className="mt-8">
              Probably about time I had somewhere on the internet to live.
            </div>
            <div className="mt-2">
              Somewhere to call my own - where I own the content and control the
              CSS.
            </div>
          </div>
        </div>
      </div>
    </StandardTemplate>
  )
}

export default About
