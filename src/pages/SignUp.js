import { useRef } from "react"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useNavigate } from "react-router-dom"

const SignUp = ({signup}) => {

  const formRef = useRef()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
      e.preventDefault()
      const formData = new FormData(formRef.current)
      const data = Object.fromEntries(formData)
      const userInfo = {
          "user":{ email: data.email, password: data.password, artist: data.artist, description: data.description, genre: data.genre, image: data.image }
      }
      signup(userInfo)
      navigate("/")
      e.target.reset()
  }

  return (
      <div className="signup-container">
          <h3>Sign Up</h3>
          <Form ref={formRef} onSubmit={handleSubmit}>
              <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" id="email" placeholder="Enter email" />
              </FormGroup>
              <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" name="password" id="password" placeholder="Enter password" />
              </FormGroup>
              <FormGroup>
                  <Label for="artist">Artist</Label>
                  <Input type="text" name="artist" id="artist" placeholder="Enter artist's name" />
              </FormGroup>
              <FormGroup>
                  <Label for="description">Description</Label>
                  <Input type="text" name="description" id="description" placeholder="Enter the description of your shows" />
              </FormGroup>
              <FormGroup>
                  <Label for="genre">Music Genre</Label>
                  <Input type="text" name="genre" id="genre" placeholder="Enter your music's genre" />
              </FormGroup>
              <FormGroup>
                  <Label for="image">Link to image</Label>
                  <Input type="text" name="image" id="image" placeholder="Image URL address" />
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