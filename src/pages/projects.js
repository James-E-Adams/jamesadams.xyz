// @flow

import * as React from "react"
import classnames from "classnames"

import StandardTemplate from "src/templates/Standard"
import ContentContainer from "src/components/ContentContainer"
type Props = {|
  +className?: string,
|}

function Link({ className, children, ...props }) {
  return (
    <a
      className={classnames("hover:underline font-bold", className)}
      {...props}
    >
      {children}
    </a>
  )
}

function Projects({ className }: Props) {
  return (
    <StandardTemplate route="/projects">
      <ContentContainer>
        <div className="text-3xl text-center leading-normal">
          Some things I've worked on:
        </div>
        <ul className="list-inside list-disc pt-8">
          <li className="mb-10">
            <Link href="https://up.com.au">Up</Link>: The best bank in
            Australia! I currently do lots of different computery things that
            help and hinder the development of Up, a pretty popular online bank
            in Australia.
            <ul>
              <li>
                <Link href="https://up.com.au/perk_up/">Perk-up</Link>: Sadly it
                probably won't be active at the time you're checking it out. At
                Up, we randomly gave people a chance to win back their morning
                coffee. The web experience was a live map that showed where
                people were winning, jumping all across Australia and zooming in
                on the cafes.
              </li>
              <li className="font-bold">
                Secret projects{" "}
                <span role="img" aria-label="eyes emoji">
                  {" "}
                  👀
                </span>
              </li>
            </ul>
          </li>
          <li className="mb-10">
            <Link
              href="https://www.drawboard.com/projects/"
              className="hover:underline font-bold"
            >
              Drawboard Projects
            </Link>
            : Formely known as Bullclip, it's a platform for live collaboration
            on PDFs. I spent a year and a half working mostly on the web
            platform. Pretty proud of the work that I did there - we solved some
            cool problems.
            <ul>
              <li>
                <span className="font-bold"> JavaScript everywhere! </span>: I
                shoehorned React Native into an existing iOS application so I
                could contribute some feature development without knowing Swift.
                And it shipped! It was deleted 6 months down the track, but I
                got it out the door. I even gave a talk at the melbourne React
                meetup about it.
              </li>
            </ul>
          </li>
          <li>
            <Link href="https://www.iress.com/software/trading-and-market-data/viewpoint/">
              iress ViewPoint
            </Link>
            : A web share trading platform - I was a fresh grad, and it was a
            pretty massive project before I arrived. Maybe if you've picked an
            account/portfolio, you've used my code.
          </li>
        </ul>
        <div className="mt-16 text-2xl text-center">
          And some unfininished hacks:
        </div>
        <ul className="list-inside list-disc pt-8">
          <li>
            <Link href="https://github.com/James-E-Adams/onewordsmackdown">
              One word smackdown:
            </Link>{" "}
            How fast can you type the word on the screen? Pretty sure this came
            about after my partner claimed I wasn't a good typist. Obviously the
            only way to disprove this outrageous accusation was to build
            adequate software first.
          </li>
          <li>
            <Link href="https://github.com/James-E-Adams/Loopee">Loopee:</Link>{" "}
            I never finished this, but the idea was multi-track looping in the
            browser. It's super jank, but I remember it being somewhat novel and
            functional. Probably fun for like 2 minutes.
          </li>
        </ul>
      </ContentContainer>
    </StandardTemplate>
  )
}

export default Projects
