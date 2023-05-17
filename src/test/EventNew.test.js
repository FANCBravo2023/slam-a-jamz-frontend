import { render ,screen} from "@testing-library/react"
import EventNew from "../pages/EventNew"
//Testing for <h1>
describe("<Home />", () => {
  it("renders without crashing", () => {
    render(<EventNew/>)
    const text = screen.getByText(/EventNew/i)
    expect(text).toBeInTheDocument() 
  })
})