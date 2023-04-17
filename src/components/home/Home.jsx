import React from 'react'
import './Home.css'
import Header from '../header/Header'

function Home() {
    return (
        <div className='home'>
            <div className="container">
                <Header />

                <div className="home_wrapper">
                    <div className="home_wrapper_left">
                        <div className="home_img">
                            <img src="" alt="my_photo" />
                        </div>
                    </div>
                    <div className="home_wrapper_right">
                        <h1>Hello, I'm a <br /><span>Full-stack web Developer</span></h1>
                        <div>
                            <a href="/" download>Download Resume</a>
                            <a href="/">View Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
