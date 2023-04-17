import React from 'react'
import './Projects.css'
import QRcode from '../../assets/projectsImgs/QR.jpg'
import walmart from '../../assets/projectsImgs/walmart.jpg'
import findphoto from '../../assets/projectsImgs/find.jpg'
import momentum from '../../assets/projectsImgs/momentum.jpg'
import paper from '../../assets/projectsImgs/nam.jpg'
import texnomart from '../../assets/projectsImgs/texno.jpg'
import { Link } from 'react-router-dom'

function Projects() {
    const data = [
        {
            title: "Walmart.com-clone",
            address: "https://walmart-one.vercel.app",
            img: walmart,
            desc: "This project is a clone version of walmart.com internet store website"
        },
        {
            title: "Find photo",
            address: "https://find-photo.netlify.app",
            img: findphoto,
            desc: "This project is for image search. You can find pictures on any topic in it"
        },
        {
            title: "Qr-code generator",
            address: "https://word-generator-to-qr-code.netlify.app",
            img: QRcode,
            desc: "In this project you can convert any word into QR-Code."
        },
        {
            title: "Momentum extention",
            address: "https://momentum-extention.netlify.app",
            img: momentum,
            desc: "This extension is for Chrome. Using this extension schedule daily tasks"
        },
        {
            title: "Paper",
            address: "https://namangan-paper.vercel.app",
            img: paper,
            desc: "this project is for a paper developing factory in Namangan. The website is styled as per the client's wishes."
        },
        {
            title: "Texnomart-clone",
            address: "https://texnomart-clone-version.vercel.app",
            img: texnomart,
            desc: "This project is a clone version of texnomart.uz internet store website"
        }

    ]
    return (
        <div className='projects' id='projects'>
            <div className="container">
                <h1 className='projects_caption'>My works</h1>
                <div className="projects_wrapper">
                    {
                        data.map((item, index) =>
                            <div key={index} className="projects_wrapper_item">
                                <p className='description'> <b>{item.title}</b> {item.desc}.</p>
                                <img src={item.img} alt={item.title} />
                                <h4>{item.title}.</h4>
                                <div className='projects_wrapper_item_links'>

                                    <Link target='_blank' to={item.address}>View</Link>
                                    <Link>Source</Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div >
    )
}

export default Projects
