import React, { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import EventEdit from './pages/EventEdit'
import EventIndex from './pages/EventIndex'
import EventNew from './pages/EventNew'
import EventShow from './pages/EventShow'
import LandingPage from './pages/LandingPage'
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import mockEvents from './mockEvents'
import mockUsers from './mockUsers'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'reactstrap'
import './App.css';
import ProtectedIndex from './pages/ProtectedIndex'

const App = () => {
  const url = 'http://localhost:3000'
  const [currentUser, setCurrentUser] = useState(null)
  const [events, setEvents] = useState([])

   // authentication methods
  const signIn = (userInfo) => {
    fetch(`${url}/signin`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      method: 'POST'
    })
    .then(response => {
    // store the token
    localStorage.setItem("token", response.headers.get("Authorization"))
    return response.json()
  })
  .then(payload => {
    setCurrentUser(payload)
  })
  .catch(error => console.log("login errors: ", error))
  }

  const signUp = (userInfo) => {
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      method: 'POST'
    })
    .then(response => {
      // store the token
    localStorage.setItem("token", response.headers.get("Authorization"))
    return response.json()
    })
    .then(payload => {
      setCurrentUser(payload)
    })
    .catch(error => console.log("login errors: ", error))
  }

  const logout = () => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": 'application/json',
        "Authorization": localStorage.getItem("token") //retrieve the token 
      },
      method: 'DELETE'
    })
    .then(payload => {
    localStorage.removeItem("token")  // remove the token
    setCurrentUser(null)
  })
  .catch(error => console.log("log out errors: ", error))
  }

  const [users, setUsers] = useState(mockUsers)

  const updateEvent = (event, id) => {

  }

  const createEvent= (event) =>{

  }
  const deleteEvent =(id) =>{

  }
  return(
    <>
      <Header />
      <Container className='my-5'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/eventedit/:id" element={<EventEdit events={events} updateEvent={updateEvent} deleteEvent={deleteEvent}/>} />
          <Route path="/eventindex" element={<EventIndex events={events} users={users} />} />
          <Route path ="/protectedindex" element={<ProtectedIndex events={events} users={users} currentUser={currentUser}/>} />
          <Route path="/eventnew" element={<EventNew createEvent={createEvent} users={users} />} />
          <Route path="/eventshow/:id" element={<EventShow events={events} users={users}/>} />
          <Route path="/signin" element={<SignIn signin={signIn}/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/signup" element={<SignUp signup={signUp}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Container>
      <Footer />
    </>
  )
}

export default App


