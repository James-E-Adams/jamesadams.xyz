import * as React from "react"

import StandardTemplate from "src/templates/Standard"
import ContentContainer from "../components/ContentContainer"
import Me from "src/components/Me"
const hobbies = [
  "climbing rocks of varying sizes, colours and types",
  "pedalling away my existential angst on a mountain bike",
  "starting my journey to chess prodigy 20 years late",
  "experimenting in the kitchen",
]

function About() {
  return (
    <StandardTemplate seoProps={{ title: "About" }} route="/about">
      <ContentContainer>
        <div> שלום </div>
      </ContentContainer>
    </StandardTemplate>
  )
}

export default About
