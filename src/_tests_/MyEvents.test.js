import { screen, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import MyEvents from "../pages/MyEvents"

describe("MyEvents />", () => {
	it("renders the my events protected page for the user", () => {
		render(
			<BrowserRouter>
				<MyEvents />
			</BrowserRouter>
		)
		const element = screen.getByText("My event listings")
		expect(element).toBeInTheDocument()
	})
})
