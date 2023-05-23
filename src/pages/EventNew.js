import React, {useState} from 'react'
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import {useNavigate} from "react-router-dom"

const EventNew = ({createEvent, currentUser}) => {
  const navigate = useNavigate()
  const [newEvent, setNewEvent] = useState({
    id: Math.floor(Math.random() * Math.pow(10, 10)),
    user_id: currentUser?.id, 
    artist:"",
    description:"",
    genre:"",
    image:"",
    date:"",
    time:"",
    venue:"",
    address:"",
    city:"",
    state:"",
    price:"0",
  })

  const handleChange = (e) => {
    setNewEvent({...newEvent, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createEvent(newEvent)
    navigate("/eventindex")
  }

  return (
    <>
      <h1>Create Show Listing</h1>
      <div>
        <Form
        onSubmit={handleSubmit}
        >
          <FormGroup>
            <Label for="artist">Artist</Label>
              <Input 
                id='artist'
                name='artist'
                placeholder='enter artist name'
                type="text"
                onChange={handleChange} 
                value={editEvent.artist}/>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
              <Input 
                id='description'
                name='description'
                placeholder='Enter description'
                type="text"
                onChange={handleChange} 
                value={editEvent.description}/>
          </FormGroup>
          <FormGroup>
            <Label for="genre">Genre</Label>
              <Input 
                id='genre'
                name='genre'
                placeholder='Enter genre'
                type="text"
                onChange={handleChange} 
                value={editEvent.genre}/>
          </FormGroup>
          <FormGroup>
            <Label for="image">Image</Label>
              <Input 
                id='image'
                name='image'
                placeholder='Enter image'
                type="text"
                onChange={handleChange} 
                value={editEvent.image}/>
          </FormGroup>
          <FormGroup>
            <Label for="date">Date</Label>
              <Input 
                id='date'
                name='date'
                placeholder='dd/mm/yyyy'
                type="text"
                onChange={handleChange} 
                value={newEvent.date}/>
          </FormGroup>
          <FormGroup>
            <Label for="time">Time</Label>
              <Input 
                id='time'
                name='time'
                placeholder='enter event time'
                type="text"
                onChange={handleChange} 
                value={newEvent.time}/>
          </FormGroup>
          <FormGroup>
            <Label for="venue">Venue</Label>
              <Input 
                id='venue'
                name='venue'
                placeholder='enter venue name'
                type="text"
                onChange={handleChange} 
                value={newEvent.venue}/>
          </FormGroup>
          <FormGroup>
            <Label for="address">Address</Label>
              <Input 
                id='address'
                name='address'
                placeholder='enter address'
                type="text"
                onChange={handleChange} 
                value={newEvent.address}/>
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
              <Input 
                id='city'
                name='city'
                placeholder='enter city'
                type="text"
                onChange={handleChange} 
                value={newEvent.city}/>
          </FormGroup>
          <FormGroup>
            <Label for="state">State</Label>
              <Input 
                id='state'
                name='state'
                placeholder='enter state'
                type="text"
                onChange={handleChange} 
                value={newEvent.state}/>
          </FormGroup>
          <FormGroup>
            <Label for="price">Ticket Price</Label>
              <Input 
                id='price'
                name='price'
                placeholder='enter ticket price'
                type="text"
                onChange={handleChange} 
                value={newEvent.price}/>
          </FormGroup>
          <Button color="primary">Submit</Button>
        </Form>      
      </div>        
    </>
  )
}

export default EventNew
