import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormGroup, Label, Input} from "reactstrap"


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

        <div class="login-siginUp-page">
        <h1 className='login-h1'>Sign In</h1>
          <form 
            className='event-new-edit-login-signUp-form'
          ref={formRef} onSubmit={handleSubmit}>
            <FormGroup 
            className='event-new-edit-login-signUp-form'>
              <Label 
                className='event-new-edit-login-signUp-form'
                for="email">Email
              </Label> 
              <Input 
                id="email"
                type="email" 
                name="email" placeholder="email@example.com" 
              />
            </FormGroup>

            <FormGroup
            className='event-new-edit-login-signUp-form'>
              <Label 
              className='event-new-edit-login-signUp-form'
              for="password">Password
              </Label>
              <Input 
                id="password"
                type="password" name="password" placeholder="Password" 
              />
            </FormGroup>
            <button       
              className="login-signUp-button" type='submit' 
              value="Login">Login
            </button>
          </form>
          <div    
            className='event-new-edit-login-signUp-form'>Not registered yet? <a href="/signup" className='event-new-edit-login-signUp-form'>Signup Now!</a> 
          </div>
        </div>
    </>
  )
}

export default Login