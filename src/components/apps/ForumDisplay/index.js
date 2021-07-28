import React, { useState, useEffect } from 'react';
import PostDisplay from './PostDisplay';

const ForumDisplay = () => {
    const [state, setState] = useState('');

    const fetcher = () => {
        fetch('http://localhost:3000/post/all')
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('fetch error');
                } else return res.json();
            })
            .then(posts => {
                if (posts.length === 0) {
                    throw new Error('no results');
                } else {
                    setState(posts);
                    console.log(posts)
                }
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetcher()
    },[])

    

    return (
        <div>
            <PostDisplay post={state}/>
        </div>
    )
}

export default ForumDisplay