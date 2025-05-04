
import React from 'react'
import { Link } from 'react-router-dom';

import './home.css'
import CountDown from './CountDown';
import Map from './Map';

import logo from './logo.svg';
import socialImage from './social.jpeg';


const Home = () => {
  
  return (
    <>
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand logo" href="#" style={{color:'#ffff'}}>
          {/* Replace with an image if you have a logo */}
          MyLogo
        </a>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link custom-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link custom-link" to='/register'>Register</a> */}
              <Link className="nav-link custom-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#">Categories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#">Fee Structure</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#contact-us">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#about-us">About us</a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
    <div id="dates-venue" style={{backgroundColor:'#1B2452', height:'100vh', padding :'50px', color: '#FFFF' }}>
      <h2>Dates:</h2> <p>15 December 2025</p>
      <h2>Venue :</h2> <p>Trinity</p>
    </div>
    <div id= "sponsors" style={{height: '75vh',padding:'50px',backgroundColor:'#a0a0a0'}}>
      <h2> Our proud partners:</h2> 
      <img src={logo} style={{width:'25vh'}} alt="React.js"/>

    </div>
    <div id="socials" style={{height:'75vh', padding:'50px',backgroundColor:'#b0b0b0'}}>
      <h2>Socials</h2>
      <img src={socialImage} style={{height: '40vh'}} alt="social"/>    
    </div>
    <div id="invite" style={{height:'50vh', padding:'50px',backgroundColor:'#c0c0c0'}}>
      <h2>Download Invite</h2>
      <a href="/orphans.pdf" download>
        <button id="downloadButton" style={{ padding: '10px 20px', fontSize: '16px' }}>
          Download PDF
        </button>
      </a>
 
    </div>
    <div id="sports-categories" style={{height:'50vh', padding:'50px',backgroundColor:'#d0d0d0'}} >
    <h2>sports Categories</h2>

    </div>
    <CountDown/>
    <div id="about-us" className='.dark-text' style={{ height: '100vh', padding: '50px', backgroundColor:'#e0e0e0' }}>
  <h2>About Us</h2>
  <p>Some info about your company...</p>
</div>

<div id="contact-us" className='.dark-text' style={{ height: '100vh', padding: '50px', backgroundColor:'#f0f0f0' }}>
  <h2>Contact Us</h2>
  <p>Contact info goes here...</p>
  <Map/>
</div>


</>
  );





  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Home;


// lat: 31.475140,
// lng: 74.279291