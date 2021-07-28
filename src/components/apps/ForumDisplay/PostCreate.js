import React, {useState, useEffect} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import './PostCreate.css'

const PostCreate = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [comments, setComments] = useState('')
    const [postName, setPostName] = useState('Maria')

   
    console.log(props.sessionToken)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(' https://nationalparkopedia.herokuapp.com/post/createPost', {
            method: 'POST',
            body: JSON.stringify({ post: {title: title, content: content, comments: comments, postName: postName}}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${props.sessionToken}`
            })
        }).then((res) => res.json())
        .then((postData) => {
            console.log(postData)
            setTitle('')
            setContent('')
            props.fetchPosts()
        })
    }

    return (
    <p className="createPostBox">
        <h3>Write a Post!</h3>
        <Form className="main" onSubmit={handleSubmit}>
            <FormGroup>
                Title:
                <Label className="titleLabel" htmlFor="title"/>
                <Input name="Title" className="inputTitle" value ={title} placeholder="Enter Your Post Title" onChange={(e) => setTitle(e.target.value)} />
            </FormGroup>
            <FormGroup>
                Content:
                <Label className="contentLabel" htmlFor="content"/>
                <Input className="inputContent" name="content" value={content} placeholder="Include More Information About Your Post" onChange={(e) => setContent(e.target.value)}>
                </Input>
            </FormGroup>
            <br />
            <Button type="submit">Post!</Button>
        </Form>
    </p>
    )}

export default PostCreate
