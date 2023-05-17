import { render ,screen} from "@testing-library/react"
import NotFound from "../pages/NotFound"
//Testing for <h1>
describe("<NotFound />", () => {
  it("renders without crashing", () => {
    render(<NotFound/>)
    const text = screen.getByText(/Not Found/i)
    expect(text).toBeInTheDocument() 
  })
})