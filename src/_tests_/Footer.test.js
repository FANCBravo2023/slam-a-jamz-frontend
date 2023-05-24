import { render, screen } from "@testing-library/react"
import Footer from "../components/Footer"
import {BrowserRouter } from "react-router-dom"

describe("<Footer />", () => {
  it("renders without error", () => {
    render(
    <BrowserRouter>
      <Footer/>
    </BrowserRouter>
    )
    const text1 = screen.getByText("A FAN*C LLC Product")
    expect(text1).toBeInTheDocument() 
    const text2 = screen.getByText("© 2023")
    expect(text2).toBeInTheDocument() 
  })
})