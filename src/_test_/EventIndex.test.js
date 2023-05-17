import { render ,screen} from "@testing-library/react"
import EventIndex from "../pages/EventIndex"
import mockEvents from "../mockEvents"
import { BrowserRouter } from "react-router-dom"
//Testing for <h1>
describe("<EventIndex />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <EventIndex events={mockEvents}/>
      </BrowserRouter>)
    const text = screen.getByText(/EventIndex/i)
    expect(text).toBeInTheDocument() 
  })
})