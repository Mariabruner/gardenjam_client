import React from 'react';
import "./PostDisplay.css"
import {Button} from 'reactstrap'

const PostDisplay = (props) => {
    console.log(props)

    const deletePost = (item) => {

        console.log(item.id)
        fetch(`https://nationalparkopedia.herokuapp.com/post/delete/${item.id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => {
            console.log(res)
            props.fetchPosts()
        })
    }

    if (props.post.length>0){
        return (
            <div className="main">
                {props.post.map((item) =>
                <div className="postBox">
                    <br />
                    <h1 className="title">{item.title}</h1>
                    <p className="content">{item.content}</p>
                    <p className="poster">Posted By: {item.postName}</p>
                    <br />
                    <Button onClick={() => {props.editUpdatePost(item); props.updateOn()}}>Update</Button> 
                    <Button className="deletebtn" onClick={() => deletePost(item)}> Delete Post </Button>
                </div>
                )}
            </div>
        )
    } else {
        return (
            <p>BROKEN</p>
        )
    }
    
}
export default PostDisplay;

