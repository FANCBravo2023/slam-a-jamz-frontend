import React, {useState} from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, } from 'reactstrap'
import { NavLink } from 'react-router-dom'


  const EventIndex = ({ events }, args) => {

    const items = [
      {
        src: 'https://picsum.photos/id/123/1200/400',
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: 1,
      },
      {
        src: 'https://picsum.photos/id/456/1200/400',
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2,
      },
      {
        src: 'https://picsum.photos/id/678/1200/400',
        altText: 'Slide 3',
        caption: 'Slide 3',
        key: 3,
      },
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    };
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} className='carousel-img' />
          <CarouselCaption
            className='carousel-caption'
            captionText={item.caption}
            captionHeader={item.caption}

          />
        </CarouselItem>
      );
    });
    return (
      <>
      <div className="carousel-container">
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
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
    </Carousel>
    </div>

        <div className='index-card-container'>
        {
        events?.map((event, index) => {
        return (
          <Card
          className='card'

        style={{
          width: "25rem", marginTop: "10px", padding: "5px", borderRadius: "40px",
          width: "20rem",
          height: "20rem"
        }}
        key={index}
      >
        <img className="index-img" alt={`profile of an artist named ${event.artist}`} src={event.image} 
        style={{ borderTopRightRadius: "30px", borderTopLeftRadius: "30px" }}/>
        <CardBody
        style={{ borderBottomRightRadius: "30px", borderBottomLeftRadius: "30px" }}>
        <CardTitle tag="h5">{event.artist}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Date: {event.date}
          </CardSubtitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Venue: {event.venue}
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
    </div>
    </>
  )
}


export default EventIndex