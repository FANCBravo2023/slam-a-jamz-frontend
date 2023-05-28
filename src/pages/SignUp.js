import React, { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FormGroup, Label, Input, Button } from "reactstrap"

const SignUp = ({ signup }) => {
	const navigate = useNavigate()
	const formRef = useRef()
	const handleSubmit = (e) => {
        e.preventDefault()
		const formData = new FormData(formRef.current)
		const data = Object.fromEntries(formData)
		const userInfo = {
			user: {
				email: data.email,
				password: data.password,
				password_confirmation: data.password_confirmation,
			},
		}
		signup(userInfo)
		navigate("/myevents")
		e.target.reset()
	}
	return (
		<>
			<div className="sign-up-page">
				<h1 className="sign-up-h1">Sign Up</h1>
				<form ref={formRef} onSubmit={handleSubmit} className="sign-up-form">
					<FormGroup className="sign-up-form">
						<Label for="email" className="sign-up-form">
							Email
						</Label>
						<Input
							id="email"
							type="email"
							name="email"
							placeholder="email@example.com"
						/>
					</FormGroup>
					<FormGroup className="sign-up-form">
						<Label className="sign-up-form" for="password">
							Password
						</Label>
						<Input
							id="password"
							type="password"
							name="password"
							placeholder="Enter Password"
						/>
					</FormGroup>
					<FormGroup className="sign-up-form">
						<Label className="sign-up-form" for="password_confirmation">
							Password Confirmation
						</Label>
						<Input
							id="password_confirmation"
							type="password"
							name="password_confirmation"
							placeholder="Confirm Password"
						/>
					</FormGroup>
					<Button
						color="primary"
						className="submit-button"
						type="submit"
						value="Login"
					>
						Sign Up
					</Button>
				</form>
				<div className="sign-up-form">
					<span className="sign-up-form">Already registered?</span>
					<a href="/login">Sign In</a>{" "}
				</div>
			</div>
		</>
	)
}

export default SignUp
