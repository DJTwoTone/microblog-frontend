import React from 'react';
import Routes from './Routes';

import { NavLink } from 'react-router-dom';


function App() {

    return (
        <div className='App container'>
            <header className='App-header jumbotron mt-2'>
                <h1 className='App-title display-3'>REACT REDUX MICROBLOG</h1>
                <p className='lead'>BLOG LIKE NO ONE IS LOOKING</p>
                <nav>
                    <div className='d-flex justify-content-around'>
                        <div className='mx-3'>
                    <NavLink exact to="/">BLOG</NavLink>

                        </div>
                        <div className='mx-3'>
                    <NavLink exact to="/new">ADD A NEW POST</NavLink>

                        </div>
                    </div>
                </nav>
            </header>
            <Routes />
        </div>
    )


}

export default App;