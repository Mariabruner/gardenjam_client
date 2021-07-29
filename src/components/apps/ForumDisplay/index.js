import React, { useState, useEffect } from 'react';
import PostDisplay from './PostDisplay';
import PostCreate from './PostCreate'
import EditPost from './EditPost'

const ForumDisplay = (props) => {
    const [state, setState] = useState('');
    const [sessionToken, setSessionToken] = useState('');
    const [posts, setPosts] = useState([])
    const [updateActive, setUpdateActive] = useState(false)
    const [postToUpdate, setPostToUpdate] = useState({})

    const fetcher = async () => {
        fetch(' https://nationalparkopedia.herokuapp.com/post/all')
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

    const editUpdatePost = (post) => {
        setPostToUpdate(post)
        console.log(post)
    }

    const updateOn = () => {
        setUpdateActive(true)
    }

    const updateOff = () => {
        setUpdateActive(false)
    }

    useEffect(async () => {
        await fetcher()
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
            <PostDisplay post={state} posts={posts} editUpdatePost={editUpdatePost} updateOn={updateOn} fetchPosts={fetcher} token={sessionToken}/>
            {updateActive ? <EditPost postToUpdate={postToUpdate} updateOff={updateOff} token={sessionToken} fetchPosts={fetcher}/> : <></>}
        </div>
    )
}

export default ForumDisplay