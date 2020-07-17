// @flow

import * as React from "react"

import StandardTemplate from "src/templates/Standard"

const Talk = ({ className = "", title, context, ...props }) => (
  <div className={className}>
    <div>
      <div className="mb-4 text-center">
        <span className="italic">{title}</span>
        <span> - </span>
        <span>{context}</span>
      </div>
      <iframe
        title={title}
        width="100%"
        height="400px"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        {...props}
      >
        {" "}
      </iframe>
    </div>
  </div>
)

type Props = {|
  +className?: string,
|}

function Talks({ className }: Props) {
  return (
    <StandardTemplate route="/talks">
      <div className="flex justify-center">
        <div className="w-4/5 mt-10">
          <div className="mb-16 text-3xl leading-normal text-center">
            Slides from past talks
          </div>
          <Talk
            src="https://docs.google.com/presentation/d/e/2PACX-1vSCwa4GlCdtK1yjpbVInwM6_oPMzW2jnjNFh89eTfRS8QR1-4Mw3-BfIBw1z_E3mOYbT36onYHU-ham/embed?start=false&loop=false&delayms=3000"
            frameBorder="0"
            title="Taking care of business with recompose, HOCs and tachyons"
            context="React Melbourne, August 2018"
          />
          <Talk
            src="https://docs.google.com/presentation/d/e/2PACX-1vRmyoQerM4kOtgcSJbkSgiPSsBV3VLiDZIM55rmeVaLYxLcGeHVuUO1iEJiSLrk2eI068gUpenCsj6E/embed?start=false&loop=false&delayms=60000"
            className="mt-16"
            frameBorder="0"
            title="Sneaking React Native into iOS apps"
            context="MelbJS, June 2018"
          />
          <div className="mt-2 mb-3 text-lg">
            <span>Code examples can be found </span>
            <a
              className="font-bold"
              href="https://github.com/James-E-Adams/HOC-FP-React-Talk"
            >
              here
            </a>
            .
          </div>
        </div>
      </div>
    </StandardTemplate>
  )
}

export default Talks
