// import React from 'react';
import "./PostDisplay.css"

const PostDisplay = (props) => {
    console.log(props)
    return (
        <div className="main">
            {props.post.map((item, idx) =>
            <div className="postBox">
                <br />
                <h1 className="title">{item.title}</h1>
                <p className="content">{item.content}</p>
                <p className="poster">Posted By: {item.postName}</p>
                <br />
            </div>
            )}
        </div>
    )
}
export default PostDisplay;

