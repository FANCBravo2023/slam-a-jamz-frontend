import React from "react"
import { render, screen } from "@testing-library/react"
import SignUp from "../pages/SignUp.js"
import { BrowserRouter } from "react-router-dom"

describe("SignUp", () => {
	it("should render the SignUp component", () => {
		render(
			<BrowserRouter>
				<SignUp />
			</BrowserRouter>
		)

		expect(screen.getByLabelText("Email")).toBeTruthy()
		expect(screen.getByLabelText("Password")).toBeTruthy()
		expect(screen.getByLabelText("Password Confirmation")).toBeTruthy()
		expect(screen.getByRole("button", { name: "Sign Up" })).toBeTruthy()
	})
})
