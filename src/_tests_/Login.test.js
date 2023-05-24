import { render, screen} from "@testing-library/react"
import Login from "../pages/Login"
import { BrowserRouter } from "react-router-dom"

describe("<Login />", () => {
  it("renders the login page for the user", () => {
    render(
      <BrowserRouter>
        <Login/>
      </BrowserRouter>
    )
    const element = screen.getByText("Login")
    expect(element).toBeInTheDocument() 
  })
})