import React, { useState, useEffect } from 'react';
import PostDisplay from './PostDisplay';
import PostCreate from './PostCreate'
import Auth from '../../../auth/Auth'



const ForumDisplay = (props) => {
    const [state, setState] = useState('');
    const [sessionToken, setSessionToken] = useState('');

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
    }, [])

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setSessionToken(localStorage.getItem('token'))
        }
    }, [])

    const updateToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setSessionToken(newToken);

    }

    const clearToken = () => {
        localStorage.clear();
        setSessionToken('');
        window.location.href = '/'
    }

    return (
        <div>
            <PostCreate fetchPosts={fetcher} sessionToken={sessionToken}/>
            <PostDisplay post={state} />
        </div>
    )
}

export default ForumDisplay