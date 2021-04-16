import React, { useState } from 'react';

function PostForm({post, save, cancel}) {

    const [postData, setPostData] = useState({
        title: post.title,
        description: post.description,
        body: post.body
    })

    function handleChange(evt) {
        const {name, value} = evt.target;
        setPostData(data => ({
            ...data,
            [name]: value
        }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        save(postData);
    }

    return (
        <form className='m-4' onSubmit={handleSubmit}>
            
            <div className='form-group'>
                <label htmlFor='postform-title'>TITLE:</label>
                <input 
                    onChange={handleChange}
                    id='postform-title'
                    name='title'
                    className='form-control'
                    value={postData.title}
                />
            </div>
            
            <div className='form-group'>
                <label htmlFor='postform-description'>DESCRIPTION:</label>
                <input 
                    onChange={handleChange}
                    id='postform-description'
                    name='description'
                    className='form-control'
                    value={postData.description}
                />
            </div>
            
            <div className='form-group'>
                <label htmlFor='postform-body'>BODY:</label>
                <input 
                    onChange={handleChange}
                    id='postform-body'
                    name='body'
                    className='form-control'
                    value={postData.body}
                />
            </div>

            <button className='btn btn-primary mx-2'>SAVE</button>
            <button onclick={cancel} className='btn btn-danger'>CANCEL</button>

        </form>
    )
}

PostForm.defaultProps={
    post: { title: "", description: "", body: "" }
};

export default PostForm;