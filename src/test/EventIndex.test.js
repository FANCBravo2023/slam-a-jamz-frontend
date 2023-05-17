import { render ,screen} from "@testing-library/react"
import EventIndex from "../pages/EventIndex"
//Testing for <h1>
describe("<EventIndex />", () => {
  it("renders without crashing", () => {
    render(<EventIndex/>)
    const text = screen.getByText(/EventIndex/i)
    expect(text).toBeInTheDocument() 
  })
})