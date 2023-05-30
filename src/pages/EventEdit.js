import React, {useState} from 'react'
import Save from "../assets/Save.jpg"
import Delete from "../assets/Delete.jpg"
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap"
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
      <h1 className='edit-event-h1'>Edit Event Listing</h1>
      <div
      className='event-new-edit-page-container'>
      <Form
      className='event-new-edit-login-signUp-form'>
      <Row
       className='event-new-edit-login-signUp-form'>
    <Col 
    md={6}
    className='event-new-edit-login-signUp-form'>
      <FormGroup
      className='event-new-edit-login-signUp-form'>
        <Label for="artist name"
        className='event-new-edit-login-signUp-form'>
          Artist
        </Label>
        <Input
          id="artist name"
          name="artist"
          placeholder="Artist name"
          type="artist"
          onChange={handleChange}
          value={editEvent.artist}
        />
      </FormGroup>
    </Col>
    <Col 
    md={4}
    className='event-new-edit-login-signUp-form'>
      <FormGroup
      className='event-new-edit-login-signUp-form'>
        <Label for="venue"
        className='event-new-edit-login-signUp-form'>
          Venue
        </Label>
        <Input
          id="venue"
          name="venue"
          placeholder='Venue name'
          onChange={handleChange}
          value={editEvent.venue}
        />
      </FormGroup>
    </Col>
    <Col 
    md={2}
    className='event-new-edit-login-signUp-form'>
      <FormGroup
      className='event-new-edit-login-signUp-form'>
        <Label for="genreType"
        className='event-new-edit-login-signUp-form'>
          Genre
        </Label>
        <Input
          id="genreType"
          name="genre"
          placeholder="Genre type"
          type="genre"
          onChange={handleChange}
          value={editEvent.genre}
        />
      </FormGroup>
    </Col>
  </Row>
  <FormGroup
  className='event-new-edit-login-signUp-form'>
    <Label for="artistDescription"
    className='event-new-edit-login-signUp-form'>
      Description
    </Label>
    <Input
      id="artistDescription"
      name="description"
      placeholder="Description of artist"
      onChange={handleChange}
      value={editEvent.description}
    />
  </FormGroup>
  <FormGroup
  className='event-new-edit-login-signUp-form'>
    <Label for="imageURL"
    className='event-new-edit-login-signUp-form'>
      Image
    </Label>
    <Input
      id="imageURL"
      name="image"
      placeholder="Image URL"
      onChange={handleChange}
      value={editEvent.image}
    />
  </FormGroup>
  <Row
  className='event-new-edit-login-signUp-form'>
    <Col 
    md={2}
    className='event-new-edit-login-signUp-form'>
      <FormGroup
      className='event-new-edit-login-signUp-form'>
        <Label for="date"
        className='event-new-edit-login-signUp-form'>
          Date
        </Label>
        <Input
          id="edate"
          name="date"
          placeholder="DD/MM/YYYY"
          onChange={handleChange}
          value={editEvent.date}
        />
      </FormGroup>
    </Col>
    <Col 
    md={2}
    className='event-new-edit-login-signUp-form'>
      <FormGroup
      className='event-new-edit-login-signUp-form'>
        <Label for="time"
        className='event-new-edit-login-signUp-form'>
          Time
        </Label>
        <Input
          id="time"
          name="time"
          placeholder='12:00pm'
          onChange={handleChange}
          value={editEvent.time}
        />
      </FormGroup>
    </Col>
    <Col 
    md={2}
    className='event-new-edit-login-signUp-form'>
      <FormGroup
      className='event-new-edit-login-signUp-form'>
        <Label for="exampleState"
        className='event-new-edit-login-signUp-form'>
          State
        </Label>
        <Input
          id="exampleState"
          name="state"
          onChange={handleChange}
          value={editEvent.state}
        />
      </FormGroup>
    </Col>
    <Col 
    md={2}
    className='event-new-edit-login-signUp-form'>
      <FormGroup
      className='event-new-edit-login-signUp-form'>
        <Label for="street"
        className='event-new-edit-login-signUp-form'>
          Street
        </Label>
        <Input
          id="street"
          name="street"
          onChange={handleChange}
          value={editEvent.street}
        />
      </FormGroup>
    </Col>
    <Col 
    md={2}
    className='event-new-edit-login-signUp-form'>
      <FormGroup
      className='event-new-edit-login-signUp-form'>
        <Label for="city"
        className='event-new-edit-login-signUp-form'>
          City
        </Label>
        <Input
          id="city"
          name="city"
          onChange={handleChange}
          value={editEvent.city}
        />
      </FormGroup>
    </Col>
    <Col md={2}
    className='event-new-edit-login-signUp-form'>
      <FormGroup
      className='event-new-edit-login-signUp-form'>
        <Label for="price"
        className='event-new-edit-login-signUp-form'>
          Price
        </Label>
        <Input
          id="price"
          name="price"
          placeholder='$45'
          onChange={handleChange}
          value={editEvent.price}
        />
      </FormGroup>
    </Col>
  </Row>

        <button
          className="delete-save-logo"
          onClick={handleSubmit} >
            <img src={Save} alt="Save changes " className="delete-save-logo" />
        </button>
        <button
          className="delete-save-logo"
          onClick={handleDelete} >
            <img src={Delete} alt="Delete Event" className="delete-save-logo" />
        </button>
      </Form>        
      </div>        
    </>
  )
}

export default EventEdit
