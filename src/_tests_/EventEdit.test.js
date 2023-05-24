import { render, screen } from "@testing-library/react"
import EventEdit from "../pages/EventEdit"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockEvents from "../mockEvents"

describe("<EventEdit/>", () => {
  it("renders a current event edit form", () => {
    render(
      <MemoryRouter initialEntries={
        ["/eventedit/1"]
      }>
        <Routes>
        <Route path="/eventedit/:id" element={<EventEdit events={mockEvents} />} />
        </Routes>
      </MemoryRouter>
    )
    const artistInput = screen.getByText( "Artist")
    expect(artistInput).toBeInTheDocument()

    const descriptionInput = screen.getByText("Description")
    expect(descriptionInput).toBeInTheDocument()

    const genreInput = screen.getByText("Genre")
    expect(genreInput).toBeInTheDocument()

    const imageInput = screen.getByText("Image")
    expect(imageInput).toBeInTheDocument()

    const dateInput = screen.getByText( "Date")
    expect(dateInput).toBeInTheDocument()

    const timeInput = screen.getByText("Time")
    expect(timeInput).toBeInTheDocument()

    const venueInput = screen.getByText( "Venue")
    expect(venueInput).toBeInTheDocument()

    const streetInput = screen.getByText( "Street")
    expect(streetInput).toBeInTheDocument()

    const cityInput = screen.getByText( "City")
    expect(cityInput).toBeInTheDocument()

    const stateInput = screen.getByText("State")
    expect(stateInput).toBeInTheDocument()

    const priceInput = screen.getByText("Price")
    expect(priceInput).toBeInTheDocument()
  })
})