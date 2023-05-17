import { render ,screen} from "@testing-library/react"
import Home from "../pages/Home"
//Testing for <h1>
describe("<Home />", () => {
  it("renders without crashing", () => {
    render(<Home/>)
    const text = screen.getByText(/home page/i)
    expect(text).toBeInTheDocument() 
   
  })
})