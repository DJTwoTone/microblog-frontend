import React from 'react';
import Comment from './Comment'

function CommentList({comments = [], delComment}) {

    return (
        comments.map(c => (
            <Comment
                key={c.id}
                id={c.id}
                text={c.text}
                delComment={delComment}
            />
        ))
    )
}

export default CommentList;