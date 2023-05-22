import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const SignUp = ({signUp}) => {

    const [email, setEmail] = useState('')
    const [encrypted_password, setEncrypted_Password] = useState('')
    const [artist, setArtist] = useState('')
    const [description, setDescription] = useState('')
    const [genre, setGenre] = useState('')
    const [image, setImage] = useState('')
    //firstSignUp@email.com///123

    return(
            <div className="signup-container">
                <h3>Sign Up</h3>
                <Form onSubmit={(e) => {
                    e.preventDefault()
                    signUp(email, encrypted_password, artist, description, genre, image)
                }}>
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
                    <FormGroup>
                        <Label for="password">Artist</Label>
                        <Input 
                            type="artist" 
                            name="artist" 
                            id="artist" 
                            placeholder="Enter artist's name"
                            value={artist}
                            onChange={(e) => setArtist(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Description</Label>
                        <Input 
                            type="description"
                            name="description" 
                            id="description" 
                            placeholder="Enter the description of your shows"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="genre">Genre</Label>
                        <Input 
                            type="genre" 
                            name="genre" 
                            id="genre" 
                            placeholder="Enter your music's genre" 
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="image">Image</Label>
                        <Input 
                            type="text" 
                            name="image" 
                            id="image" 
                            placeholder="Image URL address" 
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
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