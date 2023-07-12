 import React,{ useEffect,useState}from 'react';

import CheckOutProducts from '../Components/CheckOutProducts'
function CheckOut() {
  return (
    <>
    <h3 className='mt-5'>Your Shopping Cart</h3>  
    <div className="container-fluid d-flex align-content:spacebetween">
      <div className="row ">
        <div className="col-md-6 ">
        <img className='w-100 mt-5' style={{height:"200px"}} src="/Images/checkoutimage.png"></img>
        </div>
        <div className="col-md-6">
                     Your Purchased Products will be displayed here
        </div>
      </div>
    </div>
    </>
  )
}

export default CheckOut
 

