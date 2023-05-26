import React, {useState} from 'react'
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap"
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
      <h1 className='event-new-h1'>Create Event Listing</h1>
      <div className='event-new-page-container'>
      <Form
        onSubmit={handleSubmit}
        className='event-new-form'
      >
       <Row
       className='event-new-form'>
    <Col 
    md={6}
    className='event-new-form'>
      <FormGroup
      className='event-new-form'>
        <Label for="artist name"
        className='event-new-form'>
          Artist
        </Label>
        <Input
          id="artist name"
          name="artist"
          placeholder="Artist name"
          type="artist"
          onChange={handleChange}
          value={newEvent.artist}
        />
      </FormGroup>
    </Col>
    <Col 
    md={4}
    className='event-new-form'>
      <FormGroup
      className='event-new-form'>
        <Label for="venue"
        className='event-new-form'>
          Venue
        </Label>
        <Input
          id="venue"
          name="venue"
          placeholder='Venue name'
          onChange={handleChange}
          value={newEvent.venue}
        />
      </FormGroup>
    </Col>
    <Col 
    md={2}
    className='event-new-form'>
      <FormGroup
      className='event-new-form'>
        <Label for="genreType"
        className='event-new-form'>
          Genre
        </Label>
        <Input
          id="genreType"
          name="genre"
          placeholder="Genre type"
          type="genre"
          onChange={handleChange}
          value={newEvent.genre}
        />
      </FormGroup>
    </Col>
  </Row>
  <FormGroup
  className='event-new-form'>
    <Label for="artistDescription"
    className='event-new-form'>
      Description
    </Label>
    <Input
      id="artistDescription"
      name="description"
      placeholder="Description of artist"
      onChange={handleChange}
      value={newEvent.description}
    />
  </FormGroup>
  <FormGroup
  className='event-new-form'>
    <Label for="imageURL"
    className='event-new-form'>
      Image
    </Label>
    <Input
      id="imageURL"
      name="image"
      placeholder="Image URL"
      onChange={handleChange}
      value={newEvent.image}
    />
  </FormGroup>
  <Row
  className='event-new-form'>
    <Col 
    md={2}
    className='event-new-form'>
      <FormGroup
      className='event-new-form'>
        <Label for="date"
        className='event-new-form'>
          Date
        </Label>
        <Input
          id="edate"
          name="date"
          placeholder="DD/MM/YYYY"
          onChange={handleChange}
          value={newEvent.date}
        />
      </FormGroup>
    </Col>
    <Col 
    md={2}
    className='event-new-form'>
      <FormGroup
      className='event-new-form'>
        <Label for="time"
        className='event-new-form'>
          Time
        </Label>
        <Input
          id="time"
          name="time"
          placeholder='12:00pm'
          onChange={handleChange}
          value={newEvent.time}
        />
      </FormGroup>
    </Col>
    <Col 
    md={2}
    className='event-new-form'>
      <FormGroup
      className='event-new-form'>
        <Label for="exampleState"
        className='event-new-form'>
          State
        </Label>
        <Input
          id="exampleState"
          name="state"
          onChange={handleChange}
          value={newEvent.state}
        />
      </FormGroup>
    </Col>
    <Col 
    md={2}
    className='event-new-form'>
      <FormGroup
      className='event-new-form'>
        <Label for="street"
        className='event-new-form'>
          Street
        </Label>
        <Input
          id="street"
          name="street"
          onChange={handleChange}
          value={newEvent.street}
        />
      </FormGroup>
    </Col>
    <Col 
    md={2}
    className='event-new-form'>
      <FormGroup
      className='event-new-form'>
        <Label for="city"
        className='event-new-form'>
          City
        </Label>
        <Input
          id="city"
          name="city"
          onChange={handleChange}
          value={newEvent.city}
        />
      </FormGroup>
    </Col>
    <Col md={2}
    className='event-new-form'>
      <FormGroup
      className='event-new-form'>
        <Label for="price"
        className='event-new-form'>
          Price
        </Label>
        <Input
          id="price"
          name="price"
          placeholder='$45'
          onChange={handleChange}
          value={newEvent.price}
        />
      </FormGroup>
    </Col>
  </Row>
        <Button 
          color="primary">Submit Event
        </Button>
      </Form>       
      </div>    
    </>
  )
}

export default EventNew
