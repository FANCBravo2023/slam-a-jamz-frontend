import { render, screen } from "@testing-library/react"
import LandingPage from "../pages/LandingPage"

describe("<LandingPage />", () => {
  it("renders the landing page for the user", () => {
    render(<LandingPage/>)
    const element = screen.getByText("Home Page")
        expect(element).toBeInTheDocument()
  })
})