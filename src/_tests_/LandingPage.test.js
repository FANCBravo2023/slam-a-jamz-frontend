import { render, screen } from "@testing-library/react"
import LandingPage from "../pages/LandingPage"
import { BrowserRouter } from "react-router-dom"

describe("<LandingPage />", () => {
  it("renders the landing page for the user", () => {
    render(
      <BrowserRouter>
        <LandingPage/>
      </BrowserRouter>
    )
    const element = screen.getByText('Tech Lead')
        expect(element).toBeInTheDocument()
  })
})