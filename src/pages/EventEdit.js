import React, {useState} from 'react'
import Save from "../assets/Save.jpg"
import Delete from "../assets/Delete.jpg"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import {useNavigate, useParams} from "react-router-dom"

  const EventEdit = ({ events, updateEvent, deleteEvent }) => {

  const { id } = useParams()

  const navigate = useNavigate()

  let currentEvent = events?.find((event) => event.id === +id)
  
  const [editEvent, setEditEvent] = useState({
    artist: currentEvent?.artist,
    description: currentEvent?.description,
    genre: currentEvent?.genre,
    image:currentEvent?.image,
    date: currentEvent?.date,
    time: currentEvent?.time,
    venue: currentEvent?.venue,
    street: currentEvent?.street,
    city: currentEvent?.city,
    state: currentEvent?.state,
    price: currentEvent?.price,
  })


  const handleChange = (e) => {
    setEditEvent({...editEvent, [e.target.name]: e.target.value})
  }
  
  const handleSubmit = () => {
    updateEvent(editEvent, currentEvent.id)
    navigate(`/eventshow/${id}`)
  } 
  const handleDelete = (e) => {
    e.preventDefault()
    deleteEvent(id)
    navigate("/myevents")
  }
  return (
    <>
      <h1>Edit Event Listing</h1>
      <div>
      <Form>
      <FormGroup>
        <Label 
          for="artist">Artist
        </Label>
        <Input
          id="artist"
          type="text" 
          name="artist" 
          placeholder="Enter artist name"
          onChange={handleChange}
          value={editEvent.artist}
        />
        </FormGroup>
        <FormGroup>
        <Label 
          for="description">Description
        </Label>
        <Input
          id="description"
          type="text" 
          name="description" 
          placeholder="Enter artist description"
          onChange={handleChange}
          value={editEvent.description}
        />
        </FormGroup>
        <FormGroup>
        <Label 
          for="genre">Genre
        </Label>
        <Input 
          id="genre"
          type="text" 
          name="genre" 
          placeholder="Enter genre"
          onChange={handleChange}
          value={editEvent.genre}
        />
        </FormGroup>
        <FormGroup>
        <Label 
          for="image">Image
        </Label>
        <Input 
          id="image"
          type="text" 
          name="image" 
          placeholder="Enter image"
          onChange={handleChange}
          value={editEvent.image}
          />
        </FormGroup>
        <FormGroup>
        <Label 
          for="date">Date
        </Label>
        <Input 
          id="date"
          type="text" 
          name="date" 
          placeholder="dd/mm/yyyy"
          onChange={handleChange}
          value={editEvent.date}
        />
        </FormGroup>
        <FormGroup>
        <Label 
          for="time">Time
        </Label>
        <Input 
          id="time"
          type="text" 
          name="time" 
          placeholder="Enter event time"
          onChange={handleChange}
          value={editEvent.time}
        />
        </FormGroup>
        <FormGroup>
        <Label 
          for="venue">Venue
        </Label>
        <Input 
          id="venue"
          type="text" 
          name="venue" 
          placeholder="Enter venue name"
          onChange={handleChange}
          value={editEvent.venue}
        />
        </FormGroup>
        <FormGroup>
        <Label 
          for="street">Street
        </Label>
        <Input 
          id="street"
          type="text" 
          name="street" 
          placeholder="Enter street"
          onChange={handleChange}
          value={editEvent.street}
        />
        </FormGroup>
        <FormGroup>
        <Label 
          for="city">City</Label>
        <Input 
          id="city"
          type="text" 
          name="city" 
          placeholder="Enter city"
          onChange={handleChange}
          value={editEvent.city}
        />
        </FormGroup>
        <FormGroup>
        <Label 
          for="state">State
        </Label>
        <Input 
          id="state"
          type="text" 
          name="state" 
          placeholder="Enter state"
          onChange={handleChange}
          value={editEvent.state}
        />
        </FormGroup>
        <FormGroup>
        <Label 
          for="price">Price</Label>
        <Input 
          id="price"
          type="integer" 
          name="price" 
          placeholder="Enter ticket price"
          onChange={handleChange}
          value={editEvent.price}
           />
      </FormGroup>
        <Button
          onClick={handleSubmit} >
            <img src={Save} alt="Save changes " className="Save" />
        </Button>
        <Button
          onClick={handleDelete} >
            <img src={Delete} alt="Delete Event " className="Delete" />
        </Button>
      </Form>        
      </div>        
    </>
  )
}

export default EventEdit
