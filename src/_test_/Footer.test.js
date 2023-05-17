import { render ,screen} from "@testing-library/react"
import Footer from "../components/Footer"
//Testing for <h1>
describe("<Footer />", () => {
  it("renders without crashing", () => {
    render(<Footer/>)
    const text1 = screen.getByText("A FAN*C LLC Product")
    expect(text1).toBeInTheDocument() 
    const text2 = screen.getByText("© 2023")
    expect(text2).toBeInTheDocument() 
  })
})