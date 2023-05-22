import React, {useState} from 'react'
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import {useNavigate, useParams} from "react-router-dom"

  const EventEdit = ({events, updateEvent, deleteEvent}) => {
  const navigate = useNavigate()

  const { id } = useParams()
  let currentEvent = events?.find((event) => event.id === +id)
  
  const [editEvent, setEditEvent] = useState({
    id: Math.floor(Math.random() * Math.pow(10, 10)),
    date: currentEvent.date,
    time: currentEvent.time,
    venue: currentEvent.venue,
    address: currentEvent.address,
    city: currentEvent.city,
    state: currentEvent.state,
    price: currentEvent.price,
  })

  const handleChange = (e) => {
    setEditEvent({...editEvent, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    updateEvent(editEvent, currentEvent.id)
    navigate(`/eventshow/${id}`)
  } 
  const handleDelete = (e) => {
    e.preventDefault()
    deleteEvent(id)
    navigate('/protectedindex')
  }
  return (
    <>
      <h1>Edit Show Listing</h1>
      <div>
        <Form>
          <FormGroup>
            <Label for="date">Date</Label>
              <Input 
                id='date'
                name='date'
                placeholder='dd/mm/yyyy'
                type="text"
                onChange={handleChange} 
                value={editEvent.date}/>
          </FormGroup>
          <FormGroup>
            <Label for="time">Time</Label>
              <Input 
                id='time'
                name='time'
                placeholder='enter event time'
                type="text"
                onChange={handleChange} 
                value={editEvent.time}/>
          </FormGroup>
          <FormGroup>
            <Label for="venue">Venue</Label>
              <Input 
                id='venue'
                name='venue'
                placeholder='enter venue name'
                type="text"
                onChange={handleChange} 
                value={editEvent.venue}/>
          </FormGroup>
          <FormGroup>
            <Label for="address">Address</Label>
              <Input 
                id='address'
                name='address'
                placeholder='enter address'
                type="text"
                onChange={handleChange} 
                value={editEvent.address}/>
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
              <Input 
                id='city'
                name='city'
                placeholder='enter city'
                type="text"
                onChange={handleChange} 
                value={editEvent.city}/>
          </FormGroup>
          <FormGroup>
            <Label for="state">State</Label>
              <Input 
                id='state'
                name='state'
                placeholder='enter state'
                type="text"
                onChange={handleChange} 
                value={editEvent.state}/>
          </FormGroup>
          <FormGroup>
            <Label for="price">Ticket Price</Label>
              <Input 
                id='price'
                name='price'
                placeholder='enter ticket price'
                type="text"
                onChange={handleChange} 
                value={editEvent.price}/>
          </FormGroup>
          <Button onClick={handleSubmit} color="primary">Submit
        </Button>
        <Button onClick={handleDelete} color ="primary">Delete</Button>
        </Form>      
      </div>        
    </>
  )
}

export default EventEdit
