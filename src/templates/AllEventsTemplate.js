import React from "react"
import { Link } from "gatsby"
import "src/styles/base.css"
import "src/styles/reset.css"
import FullScreenItem from "src/components/FullScreenItem"
import BorderContainer from "../components/BorderContainer"

const linkFromName = name => `/event/${name.replace(/\s/gi, "-")}`

const Event = ({ event: { name, date } }) => (
  <Link to={linkFromName(name)} className="underline">
    {date}: {name}
  </Link>
)

const AllEventsTemplate = props => {
  const events = props.pageContext && props.pageContext.events
  if (!events) return null
  return (
    <div className="bg-green-200 p-4 min-h-screen">
      <BorderContainer className="w-full p-4 h-full">
        {events.map(event => (
          <Event event={event} />
        ))}
      </BorderContainer>
    </div>
  )
}

export default AllEventsTemplate
