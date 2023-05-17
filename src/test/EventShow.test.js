import { render ,screen} from "@testing-library/react"
import EventShow from "../pages/EventShow"
//Testing for <h1>
describe("<EventShow />", () => {
  it("renders without crashing", () => {
    render(<EventShow/>)
    const text = screen.getByText(/EventShow/i)
    expect(text).toBeInTheDocument() 
  })
})