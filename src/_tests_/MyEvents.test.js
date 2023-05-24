import { screen, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import MyEvents from "../pages/MyEvents"
import mockEvents from "../mockEvents"
import mockUsers from "../mockUsers"


describe("MyEvents />", () => {
    it("renders the my apartments protected page for the user", () => {
        render(
            <BrowserRouter>
                <MyEvents events={mockEvents} current_user={mockUsers[0]}/>
            </BrowserRouter>
        )
        const element = screen.getByText("My event listings")
        expect(element).toBeInTheDocument()
    })
})