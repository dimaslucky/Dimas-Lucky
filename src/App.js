import React, { useState } from 'react';
import profileimg from './components/img/profile-img.jpg';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { RiCopyrightLine } from 'react-icons/ri';

function App() {
  const [active, setActive] = useState("aboutContent");

  return (
    <div className="App">

      <div className="jumbotron jumbotron-fluid">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#"><RiCopyrightLine /> Dimas Lucky</a>
          <div class="navbar navbar-expand-sm ms-auto" id="navbarNav">
              <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#content" onClick={() => setActive("aboutContent")}>About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#content" onClick={() => setActive("contactContent")}>Contact</a>
                  </li>
                </ul>
          </div>
        </nav>
        
        <div class="container">
          <img src={profileimg} class="rounded-circle profile-img"/>
        </div>
        <div class="container">
          <h1 class="display-4">DIMAS LUCKY MAHENDRA</h1>
          <p class="lead">Hello, let me introduce myself.</p>
        </div>
      </div>

      <div class="container navContentContainer">
        <ul class="nav justify-content-center navContent">
          <li class="nav-item">
            <a class="nav-link active" href="#content" onClick={() => setActive("aboutContent")}>About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#content" onClick={() => setActive("experienceContent")}>Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#content" onClick={() => setActive("skillsContent")}>Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#content" onClick={() => setActive("projectsContent")}>Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#content" onClick={() => setActive("contactContent")}>Contact</a>
          </li>
        </ul>
      </div>

      <div class="container" id="content">
        {active === "aboutContent" && <About/>}
        {active === "experienceContent" && <Experience/>}
        {active === "skillsContent" && <Skills/>}
        {active === "projectsContent" && <Projects/>}
        {active === "contactContent" && <Contact/>}
      </div>

      <div className='footer'>
        <p><RiCopyrightLine /> Copyright 2021, Dimas Lucky</p>
      </div>
    </div>
  );
}

export default App;
