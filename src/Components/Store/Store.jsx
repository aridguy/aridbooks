import React, { Component } from 'react'
import './Store.css'

export class Store extends Component {
    render() {
        return (
            <div>

                <div className="container">
                    <div className='row'>
                            <h1>Shop for your Favourite book now</h1>
                    </div>
                    <div className='row mt-5'>
                        <div id='contain'>
                            <h4>Name:</h4>
                            <p>ISBN:</p>
                            <p>Country</p>
                            <p>Publisher</p>
                            <strong>Author</strong>
                        </div>
                            
                    </div>
                    
                </div>

            </div>
        )
    }
}

export default Store
