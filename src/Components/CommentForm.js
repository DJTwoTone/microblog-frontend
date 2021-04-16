import React, { useState } from 'react';

function CommentForm({addComment}) {

    const [text, setText] = useState();

    function handleChange(evt) {
        setText(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        addComment(text);
        setText("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        onChange={handleChange}
                        id="commentform-text"
                        name="text"
                        size="65"
                        placeholder="Leave a comment"
                        className="form-control"
                        value={text}
                    />
                </div>
                <button className="btn btn-primary">Add Comment</button>
            </form>
        </div>
    )
}

export default CommentForm;