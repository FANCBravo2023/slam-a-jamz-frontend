import { useState, useEffect } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import EventEdit from "./pages/EventEdit"
import EventIndex from "./pages/EventIndex"
import EventNew from "./pages/EventNew"
import EventShow from "./pages/EventShow"
import LandingPage from "./pages/LandingPage"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import { Routes, Route, useNavigate } from "react-router-dom"
import MyEvents from "./pages/MyEvents"
import "./App.css"

const App = () => {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState(null)
  const [events, setEvents] = useState()

  useEffect(() => {
    readEvent()
  }, [])

  const url = "https://fanc-backend.onrender.com"

  const login = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        setCurrentUser(payload)
      })
      .catch((error) => console.log("login errors: ", error))
  }

  const signup = (userInfo) => {
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        setCurrentUser(payload)
      })
      .catch((error) => console.log("login errors: ", error))
  }

  const logout = () => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token")
        setCurrentUser(null)
      })
      .catch((error) => console.log("log out errors: ", error))
  }

  const readEvent = () => {
    fetch(`${url}/events`)
      .then((response) => response.json())
      .then((payload) => {
        setEvents(payload)
      })
      .catch((error) => console.log("Event read errors:", error))
  }

  const createEvent = (createdEvent) => {
    fetch(`${url}/events`, {
      body: JSON.stringify(createdEvent),
      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    })
      .then((response) => response.json())
      .then(() => readEvent())
      .catch((error) => console.log("Create event errors:", error))
  }

  const updateEvent = (selectedEvent, id) => {
    fetch(`${url}/events/${id}`, {
      body: JSON.stringify(selectedEvent),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => readEvent())
      .catch((error) => console.log("Updated event errors:", error))
  }

  const deleteEvent = (id) => {
    fetch(`${url}/events/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => readEvent())
      .catch((error) => console.log())
  }

  return (
    <>
      <Header currentUser={currentUser} logout={logout} />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login login={login} />} />
          <Route path="/signup" element={<SignUp signup={signup} />} />
          <Route path="/eventindex/" element={<EventIndex events={events} />} />
          <Route
            path="/eventshow/:id"
            element={<EventShow events={events} />}
          />
          <Route
            path="/eventnew"
            element={
              <EventNew createEvent={createEvent} currentUser={currentUser} />
            }
          />
          <Route
            path="/eventedit/:id"
            element={
              <EventEdit
                events={events}
                updateEvent={updateEvent}
                currentUser={currentUser}
                deleteEvent={deleteEvent}
              />
            }
          />
          <Route
            path="/myevents"
            element={<MyEvents events={events} currentUser={currentUser} />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App