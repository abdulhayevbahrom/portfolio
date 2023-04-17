import React from 'react'
import './Skils.css'
import html from '../../assets/skilsImgs/html.png'
import css from '../../assets/skilsImgs/css-3.png'
import sass from '../../assets/skilsImgs/sass.svg'
import bootstrap from '../../assets/skilsImgs/Bootstrap.png'
import github from '../../assets/skilsImgs/github.svg'
import git from '../../assets/skilsImgs/git-icon.svg'
import js from '../../assets/skilsImgs/js.png'
import react from '../../assets/skilsImgs/react.svg'
import firebase from '../../assets/skilsImgs/firebase.svg'
import gsapF from '../../assets/skilsImgs/node-js.svg'
import npm from '../../assets/skilsImgs/npm_logo.png'
import redux from '../../assets/skilsImgs/redux.svg'
import mongodb from '../../assets/skilsImgs/mongo.svg'

function Skils() {
    return (
        <div className='skils_wrapper' id='skils'>
            <div className="container">
                <div className='skils'>
                    <h1 className='skilsOpacity'>SKILLS</h1>
                    <h1 className='skils_caption'>Skills</h1>
                    <div className="skils_container">
                        <div className="html html1">
                            <img src={html} alt="" />
                            {/* <p>html</p> */}
                        </div>
                        <div className="html css">
                            <img src={css} alt="" />
                            {/* <p>html</p> */}
                        </div>
                        <div className="html sass">
                            <img src={sass} alt="" />
                            {/* <p>html</p> */}
                        </div>
                        <div className="html bootstrap">
                            <img src={bootstrap} alt="" />
                            {/* <p>html</p> */}
                        </div>
                        <div className="html github">
                            <img src={github} alt="" />
                            {/* <p>html</p> */}
                        </div>
                        <div className="html git" >
                            <img src={git} alt="" />
                            {/* <p>html</p> */}
                        </div>
                    </div>
                    <div className="skils_container">
                        <div className="html js">
                            <img src={js} alt="" />
                            {/* <p>html</p> */}
                        </div>
                        <div className="html react">
                            <img src={react} alt="" />
                            {/* <p>html</p> */}
                        </div>
                        <div className="html firebase">
                            <img src={firebase} alt="" />
                            {/* <p>html</p> */}
                        </div>
                        <div className="html npm">
                            <img src={npm} alt="" />
                            {/* <p>html</p> */}
                        </div>
                        <div className="html redux">
                            <img src={redux} alt="" />
                            {/* <p>html</p> */}
                        </div>
                        <div className="html gsap">
                            <img src={gsapF} alt="" />
                            {/* <p>html</p> */}
                        </div>
                        <div className="html mongo">
                            <img src={mongodb} alt="" />
                            {/* <p>html</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skils
