import { render, screen } from "@testing-library/react"
import SignUp from "../pages/SignUp"
import { BrowserRouter } from "react-router-dom"

describe("<SignUp />", () => {
  it("renders the signup page for the user", () => {
    render(
      <BrowserRouter>
        <SignUp/>
      </BrowserRouter>
    )
    const element = screen.getByText("Signup")
    expect(element).toBeInTheDocument() 
  })
  
})