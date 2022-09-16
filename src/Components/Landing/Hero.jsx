import React from 'react'
import '../Landing/Hero.css'
import Nav from "../MiniNav/Nav"
import books from '../../Assets/Img/books.png'


const Hero = () => {
  
  return (
    // THE FRAGMENT 
    <div>

      <div className="container-fluid p-5 bg-dark text-white text-center hero">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 ">
              <Nav />
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <h1 align="left" className="headTxt ml-5 h1">WELCOME TO <br /> ARID <strong>BOOKIE</strong> <br /> STORE</h1>
            </div>
            <div className="col-md-5">
              <img className="books" src={books} alt="books header" />
            </div>
          </div>
        </div>
        

      </div>

      





    </div>
  )
}

export default Hero
