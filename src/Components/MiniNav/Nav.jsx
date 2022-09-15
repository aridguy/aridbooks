import React from "react";
import './Nav.css'
import Cart from '../../Assets/Icons/cart.png'

const Nav = () => {
    return (
        // THE FRAGMENT 
        <div>

            <div className="mNav">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6">
                            <img className="cart" src={Cart} alt="cart" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Nav
