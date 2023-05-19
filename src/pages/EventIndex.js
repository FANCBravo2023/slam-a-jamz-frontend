import React, { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardTitle,
  CardBody,
  CardSubtitle,
} from 'reactstrap'
import { NavLink } from "react-router-dom"

  const EventIndex = ({ events, users}) => {

    // const [activeIndex, setActiveIndex] = useState(0)
    // const [animating, setAnimating] = useState(false)

    // const next = () => {
    //   if (animating) return;
    //   const nextIndex = activeIndex === events.length - 1 ? 0 : activeIndex + 1
    //   setActiveIndex(nextIndex)
    // }

    // const previous = () => {
    //   if (animating) return;
    //   const nextIndex = activeIndex === 0 ? events.length - 1 : activeIndex - 1
    //   setActiveIndex(nextIndex)
    // };

    // const goToIndex = (newIndex) => {
    //   if (animating) return
    //   setActiveIndex(newIndex)
    // };

    // const slides = events.map((event) => {
    //   return (
    //     <CarouselItem
    //       onExiting={() => setAnimating(true)}
    //       onExited={() => setAnimating(false)}
    //       key={event.src}
    //     >
    //       <img src={event.image} alt={event} />

    //     </CarouselItem>
    //   )
    // })
    return (
      <>
       {/* <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {... events}
      >
        <CarouselIndicators
          events={events}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel> */}

        {events?.map((event, index) => {
             
          return (
              <Card key={index}>
              <CardBody> 
                <NavLink
                    to={`/eventshow/${event.id}`}
                    className="nav-link"
                >

                  {users && (
                    <CardTitle>
                      {users?.find(user => user.id === event.user_id)?.artist}
                    </CardTitle>
                  )}

                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      {event.venue}
                    </CardSubtitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      {event.date}
                    </CardSubtitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      {event.time}
                    </CardSubtitle>
                  </NavLink>
                </CardBody>
              </Card>
          )
        })}
    </>
  )}


export default EventIndex