import React from 'react';

function PostDisplay({ post, toggleEditing, delPost, vote }) {

    const { title, description, body, votes } = post;




    return (
        <div className='PostDisplay'>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{body}</p>
            </div>

            <div>
                <div>
                    <i 
                        className="fas fa-edit text-primary mx-3"
                        onClick={toggleEditing}
                    />
                    <i 
                        className="fas fa-times text-danger mx-3"
                        onClick={delPost}
                    />
                </div>
                <div>
                    <p>{votes} votes:</p>
                    <i 
                        className="fas fa-thumbs-up text-sucess mx-3"
                        onClick={evt => vote("up")}
                    />
                    <i 
                        className="fas fa-thumbs-down text-danger mx-3"
                        onClick={evt => vote("down")}
                    />

                </div>
            </div>
        </div>
    )
}

export default PostDisplay;