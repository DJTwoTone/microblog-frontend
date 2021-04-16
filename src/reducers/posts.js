import { FETCH_POST, DEL_POST, ADD_POST, UPDATE_POST, ADD_COMMENT, DEL_COMMENT, VOTE } from '../actions/types';


export default function rootReducer(state = {}, action) {
    let poststate = state[action.postId];

    switch (action.type) {

        case FETCH_POST:
            return {
                ...state,
                [action.post.id]: action.post
            };

        case ADD_POST:
            return {
                ...state,
                [action.post.id]: {
                    ...action.post,
                    comments: []
                }
            }

        case UPDATE_POST:
            return {
                ...state,
                [action.post.id]: {
                    ...action.post,
                    comments: state[action.post.id].comments
                }
            }

        case DEL_POST:
            let posts = { ...state };
            delete posts[action.postId];
            return posts;

        case ADD_COMMENT:
            return {
                ...state,
                [action.postId]: {
                    ...poststate, 
                    comments: [
                        ...poststate.comments,
                        action.comment
                    ]
                }
            };

        case DEL_COMMENT:
            return {
                ...state,
                [action.postId]: {
                    ...poststate,
                    comments: poststate.comments.filter(com => com.id !== action.commentId)
                }
            };

        case VOTE:
            return {
                ...state,
                [action.postId]: {
                    ...poststate,
                    votes: action.votes
                }
            };

        default:
            return state;
    }

}