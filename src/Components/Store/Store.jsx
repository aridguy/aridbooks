import React, { useEffect, useState } from 'react'
import './Store.css'
import Api from '../../Utilities/Api'


const Store = () => {
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
        setPages(page + 1);

    }
    return (
        <div>

            <div className="container">
                <div className='row'>
                    <h1>Shop for your Favourite book now</h1>
                </div>
                <div className='row mt-5'>
                    <div id='contain' className=''>
                        {
                            booksData.map((book) =>
                                <div>
                                    <h4 className='name'>{book.name}</h4>
                                    <p className='isbn'>{book.isbn}</p>
                                    <p className='country'>{book.country}</p>
                                    <p className='publisher'>{book.publisher}</p>
                                    <strong className='author'>{book.authors}</strong>
                                </div>
                            )
                        }
                    </div>

                </div>



            </div>
            <div>
                <button onClick={decreasePageNum}>Previous</button>
                <button onClick={increasePageNum}>Next</button>
            </div>

        </div>
    )

}

export default Store
