import React from "react"
import { useParams, NavLink } from "react-router-dom"
// import { Route, Router } from "react-router-dom"
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"

const EventShow = ({ events }) => {
  const { id } = useParams()

  const currentEvent = events?.find((event) => event.id === +id)
 

  return (
    <>
      <div className="event-body">
        {
          currentEvent && (
      
      <Card 
        style={{ width: "60rem" }} className="event-card">
        <CardImg 
          src={currentEvent.image} alt="Artist' image" />
        <CardBody 
          className="event-text event-font-size">
      <div className="grid-row">
      <div className="show-event-info">
          <CardTitle>
            <b>{currentEvent.artist}</b>
          </CardTitle>
          <CardSubtitle>
            {currentEvent.description}
          </CardSubtitle>
          <CardSubtitle>
            {currentEvent.genre}
          </CardSubtitle>
          <CardSubtitle>
            {currentEvent.date}, {currentEvent.time}
          </CardSubtitle>
          <CardSubtitle>
            {currentEvent.venue}
          </CardSubtitle>
          <CardSubtitle>
            {currentEvent.street}, {currentEvent.city}, {currentEvent.state}
          </CardSubtitle>
          <CardSubtitle>
            ${currentEvent.price}
          </CardSubtitle>
        </div>
        </div>
        <div className="event-footer">
          <NavLink 
            to={`/eventindex`}>
          <Button>Return to Event Listings
          </Button>
          </NavLink>
        </div>
        </CardBody>
      </Card>
        )}
      </div>
    </>
  )
}

export default EventShow