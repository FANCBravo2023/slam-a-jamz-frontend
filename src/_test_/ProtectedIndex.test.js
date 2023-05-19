import { screen, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ProtectedIndex from "../pages/ProtectedIndex"
import mockEvents from "../mockEvents"
import mockUsers from "../mockUsers"


describe("ProtectedIndex />", () => {
    it("renders the protected user page for the user", () => {
        render(
            <BrowserRouter>
                <ProtectedIndex events={mockEvents} current_user={mockUsers[0]}/>
            </BrowserRouter>
        )
        const element = screen.getByText("My event listings")
        expect(element).toBeInTheDocument()
    })
})