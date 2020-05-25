import React from "react"

import { Link } from "gatsby"
import "src/styles/base.css"
import "src/styles/reset.css"
import EventItem from "src/components/EventItem"
import BorderContainer from "../components/BorderContainer"
import "src/lib/fontAwesome"

const EventTemplate = props => {
  const event = props.pageContext && props.pageContext.event
  const dishes = props.pageContext && props.pageContext.dishes
  return (
    <div className="bg-green-200 p-4 min-h-screen">
      <BorderContainer className="w-full p-4 h-full">
        <Link to="/" className="underline">
          Back
        </Link>
        <div> {event.date} </div>
        <div> {event.name} </div>
        <div> {event.description} </div>
        {dishes.map(item => (
          <EventItem item={item} />
        ))}
      </BorderContainer>
    </div>
  )
}

export default EventTemplate
