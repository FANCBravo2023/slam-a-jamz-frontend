import { render, screen } from "@testing-library/react"
import EventIndex from "../pages/EventIndex"
import mockEvents from '../mockEvents'
import { BrowserRouter } from "react-router-dom"

describe("<EventIndex />", () => {
  it("renders the list of all events", () => {
    render(
      <BrowserRouter>
        <EventIndex events={mockEvents}/>
      </BrowserRouter>
    )

    const element = screen.getByText("Event Listings")
    expect(element).toBeInTheDocument()   
  })
})
