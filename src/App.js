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

const App = () => {

  const [events, setEvents] = useState(mockEvents)
  console.log(events)
  const [users, setUsers] = useState(mockUsers)

  const [currentUser, setCurrentUser] = useState({mockUsers})

  const createEvent= (event) =>{
    console.log(event)
  }
  return(
    <>
      <Header />
      <Container className='my-5'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/eventedit" element={<EventEdit />} />
          <Route path="/eventindex" element={<EventIndex events={events} users={users} />} />
          <Route path="/eventnew" element={<EventNew createEvent={createEvent} currentUser={currentUser} />} />
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


