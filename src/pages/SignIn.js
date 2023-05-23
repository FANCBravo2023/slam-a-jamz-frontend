import React, { useState } from 'react'
import { Form, FormGroup, Label, Button, Input } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

const SignIn = ({ signIn }) => {
  const formRef = useRef()
  const navigate = useNavigate()
  // const handleSubmit = (e) => {
  //   //stop the default behavior of the form.  We want to send it with fetch.
  //     e.preventDefault()
  //     // store the form entries in a variable
  //     const formData = new FormData(formRef.current)
  //     // create and object from the entries
  //     const data = Object.fromEntries(formData)
  //     // store user's info in format that can be used with jwt.
  //     const userInfo = {
  //         "user":{ email: data.email, password: data.password }
  //     }
  //     signin(userInfo)
  //     navigate("/")
  //     e.target.reset()  // resets the input field
  // }
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
              "user":{ email: data.email, password: data.password }
          }
    signIn(userInfo)
    console.log(userInfo)
    navigate("/eventindex")
  }
  
  return (
    <>
      <h1>Sign In</h1>
      <form 
      ref={formRef}
        onSubmit={handleSubmit}>
        <FormGroup>
          <Label for='email'>Email</Label>
          <Input
            id='email'
            name='email'
            placeholder='name@example.com'
            type='email'
            // onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for='password'>Password</Label>
          <Input
            id='password'
            name='password'
            placeholder='Password'
            type='password'
            // onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button>Submit</Button>
      </form>
    </>
  )
}

export default SignIn