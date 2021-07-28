import React from 'react';

const PostDisplay = (props) => {
    return (
        <div>
            {props.post.map((item, idx) =>
                <p>{item.title}</p>
            )}
        </div>
    )
}

export default PostDisplay;

