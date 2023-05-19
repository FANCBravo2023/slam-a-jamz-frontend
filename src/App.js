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

  const [events, setEvents] = useState(mockEvents)

  const [users, setUsers] = useState(mockUsers)


  const [currentUser, setCurrentUser] = useState({mockUsers})

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
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Container>
      <Footer />
    </>
  )
}

export default App


