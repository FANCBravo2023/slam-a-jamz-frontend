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
// import Home from './pages/Home'
import mockEvents from './mockEvents'
import mockUsers from './mockUsers'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Container } from 'reactstrap'
import ProtectedIndex from './pages/ProtectedIndex'
import './App.css';


const App = () => {
  const url = 'http://localhost:3000'
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState(null)
  const [events, setEvents] = useState(mockEvents)

   // authentication methods
  
  const signIn = (email, password) => {
  
    const user = mockUsers.find((user) => user.email === email) 
      if (!user) {
        return console.error('no exsisting user with provided email')
      }
      if (user.encrypted_password !== password) {
        return console.error('incorrect password')
      }
      setCurrentUser(user)
      navigate('/protectedindex')
  }

  const signUp = (email, encrypted_password, artist, description, genre, image) => {
    setCurrentUser({email: email, encrypted_password: encrypted_password, artist: artist, description: description, genre: genre, image: image})
    navigate('/protectedindex')
  }

  // logout function once we connect backend, pass logout function to header as props
  // const logout = () => {
  //   fetch('http://localhost:3000/logout', {
  //     headers: {
  //       "Content-Type": 'application/json',
  //       "Authorization": localStorage.getItem("token") //retrieve the token 
  //     },
  //     method: 'DELETE'
  //   })
  //   .then(payload => {
  //   localStorage.removeItem("token")  // remove the token
  //   navigate('/')
  //   setCurrentUser(null)
  // })
  // .catch(error => console.log("log out errors: ", error))
  // } 

  const [users, setUsers] = useState(mockUsers)

  const updateEvent = (event, id) => {

  }

  const createEvent= (newEvent) =>{
    console.log(newEvent)
  }
  const deleteEvent =(id) =>{

  }

  return(
    <>
      <Header current_user={currentUser}/>
      <Container className='my-5'>
        <Routes>
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/eventedit/:id" element={<EventEdit events={events} updateEvent={updateEvent} deleteEvent={deleteEvent}/>} />
          <Route path="/eventindex" element={<EventIndex events={events} users={users} />} />
          <Route path ="/protectedindex" element={<ProtectedIndex events={events} currentUser={currentUser}/>} />
          <Route path="/eventnew" element={<EventNew createEvent={createEvent} users={users} />} />
          <Route path="/eventshow/:id" element={<EventShow events={events} users={users}/>} />
          <Route path="/signin" element={<SignIn signIn={signIn}/>} />
          <Route path="/signup" element={<SignUp signUp={signUp}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Container>
      <Footer />
    </>
  )
}

export default App


