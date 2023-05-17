import { render ,screen} from "@testing-library/react"
import LandingPage from "../pages/LandingPage"
//Testing for <h1>
describe("<LandingPage />", () => {
  it("renders without crashing", () => {
    render(<LandingPage/>)
    const text = screen.getByText(/Landing Page/i)
    expect(text).toBeInTheDocument() 
  })
})