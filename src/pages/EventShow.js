import React, { useState } from "react"
import { useParams, NavLink } from "react-router-dom"
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import { Card, CardImg, CardBody, Progress, CardSubtitle } from "reactstrap"

const EventShow = ({ events }) => {
  const { id } = useParams()

  const currentEvent = events?.find((event) => event.id === +id)
  const [counter, setCounter] = useState(0)
  const handleIncrease = () => {
    if (counter < 100) {
      setCounter(counter + 5)
    }
  }

  const handleDecrease = () => {
    if (counter > 0) {
      setCounter(counter - 5)
    }
  }

  return (
    <>
      <h2 className="artist-name">{currentEvent.artist}</h2>
      <div className="show-page-card-container">
      
        {currentEvent && (
      <Card 
        className="show-page-card"
        style={{ width: "25rem", marginTop: "50px", padding: "5px", borderRadius: "40px" }} >
        <CardImg 
          className="myEvent-show-page-img"
          src={currentEvent.image} alt="Artist' image"
          style={{ borderTopRightRadius: "30px", borderTopLeftRadius: "30px" }} />
        <CardBody 
          style={{ borderBottomRightRadius: "30px", borderBottomLeftRadius: "30px" }}
        >
        <div className="show-event-info">
          <Progress
            animated
            className="my-3"
            value={counter}
          />  
          <div>
          <button className="envy-button" onClick={handleIncrease}><img src={like} alt="like button" className="envy-button"/></button>
            <button className="envy-button" onClick={handleDecrease}><img src={dislike} alt="dislike button" className="envy-button"/></button>
          </div>
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
          <NavLink 
            to={`/eventindex`}>
          <button className="show-page-button">
            Return to Event Listings
          </button>
          </NavLink>
        </CardBody>
      </Card>
        )}
      </div>
    </>
  )
}

export default EventShow