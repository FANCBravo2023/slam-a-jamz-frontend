import { Card, CardBody, CardTitle, CardSubtitle, Button, CardImg } from "reactstrap"
import { NavLink } from "react-router-dom"


const MyEvents = ({ events, currentUser }) => {
    const myEvents = events?.filter(events => currentUser?.id === events.user_id)
  return(
    <>
        <div className="my-event-page-card-container">
          <h1 className="my-event-title">My event listings</h1>
          {myEvents?.map((event, index) => {
            return (
              <Card 
                style={{ width: "25rem", marginTop: "50px", padding: "5px", borderRadius: "40px" }} 
              key={index}>
              <CardImg 
                className="my-event-page-img"
                src={event.image} alt="Artist' image"
                style={{ borderTopRightRadius: "30px", borderTopLeftRadius: "30px" }} />
              <CardBody
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
                <CardSubtitle >
                  ${event.price}
                </CardSubtitle>
                <div className="my-event-buttons">
                <NavLink
                  to={`/eventshow/${event.id}`}
                  className={"nav-link"}>
                  <Button 
                    className="event-button">View
                  </Button>
                </NavLink>
                <NavLink
                    to={`/eventedit/${event.id}`}>
                  <Button 
                    className="event-button">Edit
                  </Button>
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