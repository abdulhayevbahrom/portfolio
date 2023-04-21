import React from 'react'
import './Home.css'
import Header from '../header/Header'
import bg from '../../assets/robot.png'
import resume from '../../assets/my_resume.pdf'


function Home() {
    return (
        <div className='home'>
            <div className="container">
                <Header />

                <div className="home_wrapper">
                    <div className="home_wrapper_left">
                        <div className="home_img">
                            <img src={bg} alt="my_photo" />
                        </div>
                    </div>
                    <div className="home_wrapper_right">
                        <h1>Hello, I'm a <br /><span>Full-stack web Developer</span></h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, quos aspernatur sequi repellat magni iste est perspiciatis maiores, laboriosam cumque molestias? Optio voluptate laboriosam odio impedit debitis voluptatem ipsa ullam.</p>
                        <div>
                            <a href={resume} download>Download Resume </a>
                            <a href={resume} target="_blank" rel="noreferrer" >View Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
