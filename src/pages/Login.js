import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button} from "reactstrap"


const Login = ({ login }) => {
  
  const formRef = useRef()

  const navigate = useNavigate()
  const handleSubmit = (e) => {
      e.preventDefault()

      const formData = new FormData(formRef.current)

      const data = Object.fromEntries(formData)

      const userInfo = {
          "user":{ email: data.email, password: data.password }
      }
      login(userInfo)
      navigate("/myevents")
      e.target.reset()  
  }

  return (
    <>

        <div className='login-page'>
        <h1 className='login-h1'>Sign In</h1>
          <form 
            className='login-form'
          ref={formRef} onSubmit={handleSubmit}>
            <FormGroup 
            className='login-form'>
              <Label 
                className='login-form'
                for="email">Email
              </Label> 
              <Input 
                id="email"
                type="email" 
                name="email" placeholder="email@example.com" 
              />
            </FormGroup>

            <FormGroup
            className='login-form'>
              <Label 
              className='login-form'
              for="password">Password
              </Label>
              <Input 
                id="password"
                type="password" name="password" placeholder="Password" 
              />
            </FormGroup>
            <Button       
              className="submit-button" type='submit' 
              value="Login">Login
            </Button>
          </form>

          <div    
            className='login-form'>Not registered yet? <a href="/signup">Signup Now!</a> 
          </div>
        </div>
    </>
  )
}

export default Login