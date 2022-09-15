import React from "react"

import './Overlay.css'
// import Books from '../../Assets/Img/stack-of-books.png'



const Overlay = () => {
    return (
        // THE FRAGMENT 
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="overlay">
                            <h3 className="h3">OVER 19K  BOOKS</h3>
                            <button className="btn btn-primary shop">SHOP NOW</button>

                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>


        </div>
    )
}

export default Overlay
