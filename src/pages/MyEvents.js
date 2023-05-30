import { Card, CardBody, CardTitle, CardSubtitle, Button, CardImg } from "reactstrap"
import { NavLink } from "react-router-dom"


const MyEvents = ({ events, currentUser }) => {
    const myEvents = events?.filter(events => currentUser?.id === events.user_id)
  return(
    <>
        <h1 className='myEvent-h1'>My event listings</h1>
        <div className="myEvent-show-page-card-container">
          {myEvents?.map((event, index) => {
            return (
              <Card 
              className="myEvent-show-card"
                style={{ borderRadius: "40px" }} 
              key={index}>
              <CardImg 
                className="myEvent-show-page-img"
                src={event.image} alt="Artist' image"
                style={{ borderTopRightRadius: "30px", borderTopLeftRadius: "30px" }} />
              <CardBody
                className="event-page-card-body"
                style={{ borderBottomRightRadius: "30px", borderBottomLeftRadius: "30px" }}> 
              <div className="my-event-info">
                <CardTitle
                  className="mb-2 text-muted"
                  tag="h6">
                  {event.artist}
                </CardTitle> 
                <CardSubtitle>
                  Description: {event.description}
                </CardSubtitle>
                <CardSubtitle>
                  {event.genre}
                </CardSubtitle>
                <CardSubtitle>
                  {event.date}, {event.time}
                </CardSubtitle>
                <CardSubtitle>
                  {event.venue}
                </CardSubtitle>
                <CardSubtitle>
                  {event.street}, {event.city}, {event.state}
                </CardSubtitle>
                <CardSubtitle className="my-event-card-subtitle">
                  ${event.price}
                </CardSubtitle>
                <div className="myEvent-show-buttons">
                <NavLink
                  to={`/eventshow/${event.id}`}
                  className={"nav-link"}>
                  <button className="myEvent-button"
                    >View
                  </button>
                </NavLink>
                <NavLink
                    to={`/eventedit/${event.id}`}>
                  <button className="myEvent-button"
                    >Edit
                  </button>
                </NavLink>
                </div>
                </div>
              </CardBody>
            </Card>
          )}
        )}
    </div>
    </>
  )
}

export default MyEvents