import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getPostFromAPI, updatePostInAPI, delPostFromAPI, sendVoteToAPI, sendCommentToAPI, delCommentFromAPI } from '../actions/posts';

import PostForm from './PostForm';
import CommentList from './CommentList';
import PostDisplay from './PostDisplay';
import CommentForm from './CommentForm';





function Post(props) {

    const [editing, setEditing] = useState(false);
    const postId = +useParams().postId;
    const history = useHistory();
    const post = useSelector(st => st.posts[postId]);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getPost() {
            dispatch(getPostFromAPI(postId));
        }
        if(!post) {
            getPost();
        }
    }, [dispatch, postId, post])

    function toggleEditing() {
        setEditing(edit => !edit);
    }

    function edit({ title, description, body }) {
        dispatch(updatePostInAPI(
            postId,
            title,
            description,
            body
        ));

        toggleEditing();
    }

    function delPost() {
        dispatch(delPostFromAPI(postId));
        history.push("/");
    }

    function vote(direction) {
        dispatch(sendVoteToAPI(postId, direction));
    }

    function addComment(text) {
        dispatch(sendCommentToAPI(
            postId,
            text
        ));
    }

    function delComment(commentId) {
        dispatch(delCommentFromAPI(
            postId, 
            commentId
        ));
    }


    if(!post) return <p>LOADING...</p>

    return (

        <div className="Post">
            {editing
            ? <PostForm post={post} save={edit} cancel={toggleEditing} />
            : <PostDisplay
                post={post}
                toggleEditing={toggleEditing}
                delPost={delPost}
                vote={vote}
            />}
            <section className='m-4'>
                <h3>Comments</h3>
                <CommentList
                    comments={post.comments}
                    delComment={delComment}
                />
                <CommentForm 
                    addComment={addComment}
                />
            </section>
        </div>
    )
}

export default Post;