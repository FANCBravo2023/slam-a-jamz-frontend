import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const SignUp = ({signUp}) => {

    const [email, setEmail] = useState('')
    const [encrypted_password, setEncrypted_Password] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        signUp(email, encrypted_password)
        navigate("/eventindex")
      }

    return(
            <div className="signup-container">
                <h3>Sign Up</h3>
                <Form 
                    onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="encrypted_password">Password</Label>
                        <Input 
                            type="encrypted_password" 
                            name="encrypted_password" 
                            id="encrypted_password" 
                            placeholder="Enter password" 
                            value={encrypted_password}
                            onChange={(e) => setEncrypted_Password(e.target.value)}
                        />
                    </FormGroup>
                    <Button color="primary">Sign Up</Button>
                </Form>
                <div className="login-container">
                    <span>Already registered?</span>
                    <a href="/signin"> Sign In </a>
                </div>
            </div>
    )
}

export default SignUp