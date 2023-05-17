import { render ,screen} from "@testing-library/react"
import SignUp from "../pages/SignUp"
//Testing for <h1>
describe("<SignUp/>", () => {
  it("renders without crashing", () => {
    render(<SignUp/>)
    const text = screen.getByText(/Sign Up/i)
    expect(text).toBeInTheDocument() 
  })
})