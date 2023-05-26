import React from "react"
import { useParams, NavLink } from "react-router-dom"
// import { Route, Router } from "react-router-dom"
import { Card, CardImg, CardBody, Progress, CardSubtitle, Button } from "reactstrap"

const EventShow = ({ events }) => {
  const { id } = useParams()

  const currentEvent = events?.find((event) => event.id === +id)
 

  return (
    <>
      <h2 className="artist-name">{currentEvent.artist}</h2>
      <div className="show-page-card-container">
      
        {currentEvent && (
      <Card 
        className="show-page-card"
        style={{ width: "25rem", marginTop: "50px", padding: "5px", borderRadius: "40px" }} >
        <CardImg 
          className="show-page-img"
          src={currentEvent.image} alt="Artist' image"
          style={{ borderTopRightRadius: "30px", borderTopLeftRadius: "30px" }} />
        <CardBody 
          style={{ borderBottomRightRadius: "30px", borderBottomLeftRadius: "30px" }}
        >
        <div className="show-event-info">
          <Progress
            animated
            className="my-3"
            color="danger"
            value="25"
          />  
          <CardSubtitle>
            Description: {currentEvent.description}
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
          <CardSubtitle >
            ${currentEvent.price}
          </CardSubtitle>
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