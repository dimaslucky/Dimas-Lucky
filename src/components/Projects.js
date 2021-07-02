import React from 'react';
import khaloryne from './img/khaloryne-web.png';
import bkpp from './img/bkpp-web.png';
import tanks from './img/tanks-game.png'
import { Carousel } from 'react-bootstrap';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Projects = () => {
    return(
        <div className='projects'>
            <Carousel className='projectsContent'>
                <Carousel.Item className='khaloryne'>
                    <a href="https://khaloryne.netlify.app/" className='projectsImgContainer'>
                        <img
                        className="d-block w-100 khaloryneImg"
                        src={khaloryne}
                        alt="khaloryne"
                        />
                        <div className='projectsOverlayLink'>
                            <div className='overlayLink'><FontAwesomeIcon icon={faEye}/></div>
                        </div>
                    </a>
                    <div className='projectsCaption'>
                        <p>A simple website for an online fashion store to display their catalogs.</p>
                        <p>HTML - CSS - JavaScript - Bootstrap</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={bkpp}
                    alt="BKPP Bandung"
                    />

                    <div className='projectsCaption'>
                        <p>A website for BKPP Bandung to manage their employees information database.</p>
                        <p>HTML - CSS - JS - ReactJS - PostgreSQL - NodeJS - Express Framework</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={tanks}
                    alt="Unity Tanks"
                    />

                    <div className='projectsCaption'>
                        <p>A remake of a tank shooting game based from complete assets from Unity with 
                            modifications including new modes and concept.</p>
                        <p>C# - Unity Engine</p>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Projects;