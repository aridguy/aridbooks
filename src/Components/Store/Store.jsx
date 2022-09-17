import React, { useEffect, useState } from 'react'
import './Store.css'
import Api from '../../Utilities/Api'

// page toggle image/icon
import left from '../../Assets/Icons/left.png'
import right from '../../Assets/Icons/right.png'


const Store = () => {
    const gotoCart = () => {
        document.getElementById('count');
    }
    const [page, setPages] = useState(1)
    const [booksData, setBookData] = useState([])
    useEffect(() => {
        Api.getBooks(page, (data) => setBookData(data.data))
    }, [page])

    const decreasePageNum = () => {
        if (page > 1) {
            setPages(page - 1);
        }

    }
    const increasePageNum = () => {
        if(page === 1){
            setPages(page + 1);
        }

    }
    return (
        <div>
            <div><span className="count" id="count">0</span></div>
            <div className="container">
                <div className='row'>
                    <h1>Shop for your Favourite book now</h1>
                </div>
                <div className='row mt-5'>
                        {
                            booksData.map((book) =>
                                <div className='theWrap' id='contain'>
                                    <h4 className='name'>{book.name}</h4>
                                    <p className='isbn'>{book.isbn}</p>
                                    <p className='country'>{book.country}</p>
                                    <p className='publisher'>{book.publisher}</p>
                                    <strong className='author'>{book.authors}</strong>
                                    <button onClick={gotoCart} className='btn btn-warning mt-2 shopBooks'>Add to Cart</button>
                                </div>
                            )
                        }
                </div>

            </div>
            <div id='pageTogs' className='container'> 
                <p>Next Page</p>
                <img onClick={decreasePageNum} src={left} alt="left" />
                <img onClick={increasePageNum} src={right} alt="right" />
            </div>

        </div>
    )

}

export default Store






