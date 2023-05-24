import React, {useState} from 'react'
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import {useNavigate} from "react-router-dom"

const EventNew = ({ createEvent, currentUser }) => {
  const navigate = useNavigate()
  const [newEvent, setNewEvent] = useState({
    user_id: currentUser?.id,
    artist:"",
    description:"",
    genre:"",
    image:"",
    date:"",
    time:"",
    venue:"",
    street:"",
    city:"",
    state:"",
    price:"0"
  })

  const handleChange = (e) => {
    setNewEvent({...newEvent, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createEvent(newEvent)
    navigate("/myevents")
  }

  return (
    <>
      <h1>Create Event Listing</h1>
      <Form
        onSubmit={handleSubmit}
      >
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
          value={newEvent.artist}
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
          value={newEvent.description}
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
          value={newEvent.genre}
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
          value={newEvent.image}
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
          value={newEvent.date}
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
          value={newEvent.time}
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
          value={newEvent.venue}
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
          value={newEvent.street}
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
          value={newEvent.city}
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
          value={newEvent.state}
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
          value={newEvent.price}
           />
      </FormGroup>
        <Button 
          color="primary">Submit Event
        </Button>
      </Form>           
    </>
  )
}

export default EventNew
