// @flow

import * as React from "react"
import classnames from "classnames"

import StandardTemplate from "src/templates/Standard"
import ContentContainer from "src/components/ContentContainer"

type Props = {|
  +className?: string,
|}

function Talks({ className }: Props) {
  return (
    <StandardTemplate route="/talks">
      <ContentContainer> </ContentContainer>
    </StandardTemplate>
  )
}

export default Talks
