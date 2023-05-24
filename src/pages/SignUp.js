import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'


const SignUp = ({signup}) => {

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(formRef.current)

        const data = Object.fromEntries(formData)

        const userInfo = {
            "user": {email: data.email, password: data.password, password_confirmation: data.password_confirmation}
        }
        signup(userInfo)
        navigate("/myevents")
        e.target.reset()
      }

    return(
        <>
        <div className="sign-up-container">
            <h3>Sign Up</h3>
          <form ref={formRef} onSubmit={handleSubmit} className="form">
            <FormGroup>
            <Label 
                for="email">Email
            </Label> 
            <Input
                id="email"
                type="email"         
                name="email" placeholder="email@example.com"
            />
            </FormGroup>

            <FormGroup>
            <Label 
                for="password">Password
            </Label> 
            <Input
                id="password"
                type="password" name='password' placeholder="Enter Password" 
            />
            </FormGroup>
            <FormGroup>
                <Label 
                for="password_confirmation">Password Confirmation
                </Label> 
            <Input
                id="password_confirmation"
                type="password" name='password_confirmation' placeholder="Confirm Password" 
            />
            </FormGroup>

            <Button 
            color="primary"
            className="submit-button" type="submit" 
            value="Login">Sign Up
            </Button>        
          </form>

          <div 
            className="login-container">
                <span>Already registered?</span>
          <a href="/signin">Sign In</a> </div>
        </div>
        </>
    )
}

export default SignUp