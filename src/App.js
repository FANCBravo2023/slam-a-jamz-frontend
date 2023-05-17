
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
import { mockEvents } from './mockEvents'
import { mockUsers } from './mockUsers'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'reactstrap'
import './App.css';

const App = () => {
  return(
    <>
      <Header />
      <Container className='my-5'>
        <Routes>
          <Route path="/" element={<EventEdit />} />
          <Route path="/eventedit" element={<EventEdit />} />
          <Route path="/eventindex" element={<EventIndex />} />
          <Route path="/eventnew" element={<EventNew />} />
          <Route path="/eventshow" element={<EventShow />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Container>
      <Footer />
    </>
  )
}

export default App


