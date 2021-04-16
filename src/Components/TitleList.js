import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchTitlesFromAPI } from '../actions/titles';
import { sendVoteToAPI } from '../actions/posts';

function TitleList() {

    const titles = useSelector(st => st.titles);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(function() {
        async function fetchTitles() {
            await dispatch(fetchTitlesFromAPI());
            setLoading(false);
        }

        if(loading) {
            fetchTitles();
        }
    }, [dispatch, loading])

    function vote(id, direction) {
        dispatch(sendVoteToAPI(id, direction))
    }

    if (loading) return <b>LOADING</b>;

    if (!loading && titles.length === 0) {
        return <b>PLEASE POST SOMETHING</b>
    }



    return (
        <div className='row'>
            {titles.map(title => (
                <div key={title.id} className='col'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='card-title'>
                                <Link to={`/${title.id}`}>{title.title}</Link>
                            </div>
                            <div className='card-text'>
                                <p>{title.description}</p>
                            </div>
                            <div className='card-footer'>
                                <i 
                                    className='fas fa-thumbs-up text-success mx-2'
                                    onClick={evt => vote(title.id, "up")}
                                />
                                <i 
                                    className='fas fa-thumbs-down text-danger mx-2'
                                    onClick={evt => vote(title.id, "down")}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            ))}
            
        </div>
    )
}

export default TitleList;