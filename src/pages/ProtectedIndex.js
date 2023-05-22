import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { NavLink } from "react-router-dom"


const ProtectedIndex = ({ events, current_user, users}) => {
  // use the filter method to create a new array of events belonging to the user by using user_id.
    const myEvents = events?.filter(events => current_user?.id === events.user_id)
  return(
    <>
      <div className="events-body">
        <h1 className="index-title">My event listings</h1>
        <div className="flex-events">
          {/* then map over filtered array to show only user's apartments */}
          {myEvents?.map((event, index) => {
            return (
              <Card key={index}>
                <CardBody> 
                  {users && (
                    <CardTitle>
                      {users?.find(user => user.id === event.user_id)?.artist}
                    </CardTitle>
                  )}    
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6">
                    {event.venue}
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

export default ProtectedIndex