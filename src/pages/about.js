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
    <StandardTemplate route="/about">
      <ContentContainer>
        <div className="mb-10 flex items-center justify-center">
          <Me className="rounded-full w-32 border-solid border-red-800 border-4" />
        </div>
        <div className="text-4xl text-center">Hi I'm James! </div>
        <div className="text-lg">
          <div className="mt-8">
            Probably about time I had somewhere on the internet to live.
          </div>
          <div className="mt-2 text-center">Where I own the content and </div>
          <div className="mt-8 flex justify-center items-center">
            <span className="text-green-500"> control </span>{" "}
            <div className="mx-8 transform rotate-45">
              <span className="text-3xl"> the </span>
            </div>
            <div className="transform skew-x-12 skew-y-12">
              <span className="text-5xl text-blue-400"> CSS.</span>
            </div>
          </div>
          <div className="mt-12">
            <div>
              I'm a <span className="line-through">software engineer</span>{" "}
              {"  "}
              <span className="font-bold">human</span>{" "}
            </div>{" "}
            <div className="mb-6">from not-so-sunny Melbourne, Australia. </div>
            <div>
              I’ve spent most of my career pigeon-holed inside a browser,
              digging my way out with varying degrees of success - mostly in the
              direction of native apps. Nowadays, I work with the lovely people
              at{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ferocia.com.au"
                className="hover:text-ferociaPurple"
              >
                Ferocia
              </a>{" "}
              on{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://up.com.au"
                className="hover:text-upOrange"
              >
                Up Bank
              </a>
              .
            </div>
          </div>
          <div className="mt-12">
            When I'm not frowning at computers, you can find me:
            <ul className="list-inside list-disc pt-4">
              {hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            Feel free to say hello at{" "}
            <a href="mailto:hello@jamesadams.xyz">hello@jamesadams.xyz </a>.
          </div>
          <div className="mt-12">Elsewhere on the internet:</div>
          <ul className="list-inside list-disc pt-4">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/jamesadams0"
              >
                twitter
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/James-E-Adams"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.thecrag.com/climber/jamesadams"
              >
                theCrag
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://lichess.org/@/james-adams"
              >
                lichess
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.strava.com/athletes/20075219"
              >
                Strava
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.goodreads.com/user/show/91757357-james"
              >
                Goodreads
              </a>
            </li>
          </ul>
        </div>
      </ContentContainer>
    </StandardTemplate>
  )
}

export default About
