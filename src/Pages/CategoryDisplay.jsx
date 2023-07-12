import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function CategoryDisplay() {

  const {cateogoryName} =useParams()
  const [products,setProducts]=useState([])

useEffect(()=>{
axios.get(`https://dummyjson.com/products/category/${cateogoryName}`).then(json =>setProducts(json.data.products))
},[cateogoryName])

useEffect(() => {
  AOS.init({duration:2000});
}, [])
  return (
    <>
    
     
      { <div>

     <div className="my-5 text-center">
      <h1>CATEGORY {cateogoryName.toUpperCase().replace('-', '')}</h1>
    
     </div>
<div className="row main" >
  {

    products.map((value,key)=>
    
    <div className='col-md-4 my-4 d-flex  key={key}' data-aos="zoom-in">
  <Link className='text-decoration-none ProductCard' to={`/products/${value.id}`}>
  <Card className='img-fluid w-20 ProductImage'>
      <Card.Img  classNames='ProductImage' variant="top" src={value.thumbnail} style={{
                            width: '100%',
                            height: '30vh',
                            objectFit: 'contain'
                        }}
                        className="img-fluid rounded-start bg-dark" alt="..."/>
      <Card.Body>
        <Card.Title className='ProductName  ' style={{color:'Blue'}}>{value.title}-{value.price}$</Card.Title>
        <Card.Text className='limit-text'>
         {value.description}
        </Card.Text>
       
      </Card.Body>
    </Card>
  
  
  </Link>
  </div>
    )
  }
</div>
      </div> }
    
    </>
  )
}

