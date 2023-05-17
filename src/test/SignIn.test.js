import { render ,screen} from "@testing-library/react"
import SignIn from "../pages/SignIn"
//Testing for <h1>
describe("<SignIn />", () => {
  it("renders without crashing", () => {
    render(<SignIn/>)
    const text = screen.getByText(/Sign In/i)
    expect(text).toBeInTheDocument() 
  })
})