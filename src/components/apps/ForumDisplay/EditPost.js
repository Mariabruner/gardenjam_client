import { pipelineTopicExpression } from '@babel/types';
import React, { useState } from 'react'
import { Container, Row, Col, Modal, ModalHeader, Button, PaginationLink, Form, FormGroup, Label, Input } from 'reactstrap';

const EditPost = (props) => {
    const [editTitle, setEditTitle] = useState(props.postToUpdate.Title)
    const [editContent, setEditContent] = useState(props.postToUpdate.content)
    const [comments, setComments] = useState('')
    const [postName, setPostName] = useState('')

    console.log(props.postToUpdate)

    const postUpdate = (e, post) => {

        e.preventDefault()

        fetch(` https://nationalparkopedia.herokuapp.com/post/update/${props.postToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({post: {title: editTitle, content: editContent, comments: comments, postName: props.postToUpdate.postName}}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => {
            console.log(res)
            props.fetchPosts()
            props.updateOff()
        })
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Update your post!</ModalHeader>
            <Form onSubmit={postUpdate}>
                <FormGroup>
                    <Label htmlFor="title">Edit Title: </Label>
                    <Input name="title" value={editTitle} onChange={(e) => setEditTitle(e.target.value)}></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="content">Edit Content: </Label>
                    <Input name="content" value={editContent} onChange={(e) => setEditContent(e.target.value)}></Input>
                </FormGroup>
                <Button type="submit">Submit Update</Button>
            </Form>
        </Modal>
    )
}

export default EditPost