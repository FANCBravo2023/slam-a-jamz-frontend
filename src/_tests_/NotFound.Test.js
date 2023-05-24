import { render, screen } from "@testing-library/react"
import NotFound from "../pages/NotFound"

describe("<NotFound />", () => {
  it("renders the NotFound page for the user", () => {
    render(<NotFound/>)
    const element = screen.getByText("Not Found")
    expect(element).toBeInTheDocument() 
  })
})