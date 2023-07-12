import axios from 'axios';
import React , { useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Categories() {

  const[categories,setCategories]=useState([])
  useEffect(()=>{
    axios.get('https://dummyjson.com/products/categories').then(json => setCategories(json.data))
  },[])

  useEffect(() => {
    AOS.init({duration:2000});
  }, [])

  return (
    <>
   
    
      <div className="container-cat">
       <div className="my-5 text-center">
    
          <h1 >CATEGORIES</h1>
  
       </div>
      
      <div className="row " data-aos="fade-right">
     {
      categories.map((val,key)=>
      <div className="col-md-4 my-2 ProductCard" key={key}>
<Link className='text-decoration-none ProductName' to={`/products/category/${val}`}>
<Card>
 < Card.Body>
<Card.Title>{val.toUpperCase().replace('-','')}</Card.Title>
</Card.Body>
</Card>
</Link>
</div>
      )
     }
</div>
</div>
    </>
  )
}
