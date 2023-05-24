import React, {useState} from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption,
//   Card,
//   CardTitle,
//   CardBody,
//   CardSubtitle,
// } from 'reactstrap'


  const EventIndex = ({ events, users }) => {

    return (
      <>
      <main className="event-index-cards">
        {
        events?.map((event, index) => {
        return (
          <Card
        style={{
          width: "14rem"
        }}
        key={index}
      >
        <img alt={`profile of an artist named ${event.artist}`} src={event.image} />
        <CardBody>
        <CardTitle tag="h5">{event.artist}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
            Description: {event.description}
          </CardSubtitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Genre: {event.genre}
          </CardSubtitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Date: {event.date}
          </CardSubtitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Time: {event.time}
          </CardSubtitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Venue: {event.venue}
          </CardSubtitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Street: {event.street}
          </CardSubtitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            City: {event.city}
          </CardSubtitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            State: {event.state}
          </CardSubtitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Price: ${event.price}
          </CardSubtitle>
          <NavLink to={`/eventshow/${event.id}`} className="nave-link">See More Details</NavLink>
          </CardBody>
        </Card>
        )
      })
    }
    </main>
    </>
  )
}


export default EventIndex