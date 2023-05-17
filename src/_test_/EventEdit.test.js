import { render ,screen} from "@testing-library/react"
import EventEdit from "../pages/EventEdit"
//Testing for <h1>
describe("<EventEdit/>", () => {
  it("renders without crashing", () => {
    render(<EventEdit/>)
    const text = screen.getByText(/EventEdit/i)
    expect(text).toBeInTheDocument() 
  })
})