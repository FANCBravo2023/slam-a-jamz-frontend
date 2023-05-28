import { render, screen } from "@testing-library/react"
import EventIndex from "../pages/EventIndex"
import { BrowserRouter } from "react-router-dom"

describe("<EventIndex />", () => {
  it("renders the list of all events", () => {
    const events = [{ id: 1, artist: 'Artist 1', description: 'Description 1', venue: 'Venue 1', date: 'Date 1'}]
    render(
      <BrowserRouter>
        <EventIndex events={events}/>
      </BrowserRouter>
    )

    const slideButton =screen.getByRole('button', {
      name: /next/i
    })
    expect(slideButton).toBeInTheDocument()
    const details = screen.getByText(/see more details/i)
    expect(details).toBeInTheDocument()
  }) 
})
