import { render, screen } from "@testing-library/react"
import EventShow from "../pages/EventShow"
import mockEvents from "../mockEvents"
import { MemoryRouter } from "react-router-dom"

describe("<EventShow />", () => {
  it("renders an event", () => {
    render(
      <MemoryRouter initalEntries= {
        ["/eventshow/1"]
      }>
        <EventShow events={mockEvents} />
      </MemoryRouter>
    )
    
    const element = screen.getByText("Edit Event Listing")
    expect(element).toBeInTheDocument()
    
  })
})