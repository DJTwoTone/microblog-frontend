import React from 'react';

function Comment({id, text, delComment}) {

    function handleDel(evt) {
        delComment(id);
    }

    return (
        <div>
            <p>
                {text}
                {delComment && (
                    
                    <i 
                        className="fa fas-times text-danger mx-3"
                        onClick={handleDel}
                    />
                )}
            </p>
        </div>
    )
}

export default Comment;