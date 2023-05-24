import { render, screen } from "@testing-library/react"
import EventNew from "../pages/EventNew"
import { BrowserRouter } from "react-router-dom"

describe("<EventNew />", () => {
  it("renders a new apartment form", () => {
    render(
    <BrowserRouter>
      <EventNew />
    </BrowserRouter>
    )

    const text = screen.getByText("Create Event Listing")
    expect(text).toBeInTheDocument()

    const artistInput=screen.getByText("Artist")
    expect(artistInput).toBeInTheDocument()
    
    const descriptionInput=screen.getByText( "Description")
    expect(descriptionInput).toBeInTheDocument()
    
    const genreInput=screen.getByText( "Genre")
    expect(genreInput).toBeInTheDocument()
    
    const imageInput=screen.getByText("Image")
    expect(imageInput).toBeInTheDocument()
    
    const dateInput=screen.getByText("Date")
    expect(dateInput).toBeInTheDocument()
    
    const timeInput=screen.getByText("Time")
    expect(timeInput).toBeInTheDocument()
    
    const venueInput=screen.getByText("Venue")
    expect(venueInput).toBeInTheDocument()
    
    const streetInput=screen.getByText("Street")
    expect(streetInput).toBeInTheDocument()
    
    const cityInput=screen.getByText("City")
    expect(cityInput).toBeInTheDocument()
    
    const stateInput=screen.getByText("State")
    expect(stateInput).toBeInTheDocument()
    
    const priceInput=screen.getByText("Price")
    expect(priceInput).toBeInTheDocument()
  })

})