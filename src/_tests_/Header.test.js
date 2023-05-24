import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "../components/Header"

describe("<Header />", () => {
  it("renders without error", () => {
    
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })
 
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("All Events"))
    expect(screen.getByText("All Events")).toBeInTheDocument()
    
    userEvent.click(screen.getByText("Add an Event"))
    expect(screen.getByText("Add an Event")).toBeInTheDocument()
  
  })
})