import { render ,screen} from "@testing-library/react"
import Header from "../components/Header"
//Testing for <h1>
describe("<Header />", () => {
  it("renders without crashing", () => {
    render(<Header/>)
    
  })
})