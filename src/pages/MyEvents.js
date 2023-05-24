import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { NavLink } from "react-router-dom"


const MyEvents = ({ events, currentUser }) => {
    const myEvents = events?.filter(events => currentUser?.id === events.user_id)
  return(
    <>
      <div className="events-body">
        <h1 className="index-title">My event listings</h1>
        <div className="flex-events">
          {myEvents?.map((event, index) => {
            return (
              <Card key={index}>
                <CardBody> 
                  
                  <CardTitle
                    className="mb-2 text-muted"
                    tag="h6">
                    {event.artist}
                  </CardTitle> 
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6">
                    {event.description}
                  </CardSubtitle>  
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6">
                    {event.genre}
                  </CardSubtitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6">
                    {event.image}
                  </CardSubtitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6">
                    {event.date}
                  </CardSubtitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6">
                    {event.time}
                  </CardSubtitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6">
                    {event.venue}
                  </CardSubtitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6">
                    {event.street}
                  </CardSubtitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6">
                    {event.city}
                  </CardSubtitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6">
                    {event.state}
                  </CardSubtitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6">
                    {event.price}
                  </CardSubtitle>
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
                  </CardBody>
                </Card>
                )
              }
            )
          }
        </div>
      </div>
    </>
  )
}

export default MyEvents