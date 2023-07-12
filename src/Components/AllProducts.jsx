


import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../Components/Loader'
import {CartContext} from '../context/addtoCart/context'
export default function Products() {


    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)

    const {state,dispatch} = useContext(CartContext)

    useEffect(() => {
        axios.get('https://dummyjson.com/products').then(json => {
            setProducts(json.data.products);
            setLoader(false)
        })
    }, [])

    const addtoCart = (item) => {
     /*     console.log(item) */
        dispatch(
            {
                type : "ADD_TO_CART",
                payload : item
            }
        )
    }


    return (
        <>
            {
                loader
                    ?
                    <Loader />
                    :
                    <div className='container'>
                        <div className="my-5 text-center">
                            <h2>Products</h2>
                            {/* <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, nihil.</p> */}
                        </div>

                        <div className="row">

                            {
                                products.map((val, key) =>
                                    <div className="col-md-3 my-3" key={key}>
                                        <div className="card">
                                            <img src={val.thumbnail} className="card-img-top" alt="..."
                                                style={{
                                                    width: '100%',
                                                    height: '30vh',
                                                    objectFit: 'contain'
                                                }}
                                            />
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <h6 className="card-title">{val.title.length > 20 ? val.title.slice(0, 20) + '...' : val.title} </h6>
                                                    <span className="badge bg-secondary">{val.price}$</span>
                                                </div>
                                                <p className="card-text">
                                                    {val.description.length > 50 ? val.description.slice(0, 50) + '...' : val.description}
                                                </p>
                                                <div className="d-grid">
                                                    <button className="btn btn-outline-dark" type="button" onClick={() => addtoCart(val)}>
                                                        Add to Cart
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>

                    </div>
            }


        </>
    )
}