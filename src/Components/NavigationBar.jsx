import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {CgMenu,CgClose} from "react-icons/cg"
import '/src/index.css';
import { Badge, FormControl } from 'react-bootstrap';
import { Dropdown  } from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa'
import Cart from './Cart'


import { useContext } from 'react';

function NavigationBar() {

  return (
   <>
   
   <Navbar expand="lg" className="bg-dark bg-gradient my-links">
      <Container fluid className='text-success'><i className='bi bi-shop-window text-warning fs-4 me-3'>
        <Nav.Link to href="/">eShop</Nav.Link></i>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
            <Nav.Link className='text-white' href="/">Home</Nav.Link>
            <Nav.Link className='text-white' href="/Products">Products</Nav.Link>

           {/*  <Form className="d-flex mx-5">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
      
          </Nav>

          <Nav className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
         
            <Nav.Link className='text-white' href="/Login">Login</Nav.Link>
            <Nav.Link className='text-white' href="/SignUp">Sign Up</Nav.Link>
         
          
            

            {/* For Responsive Navbar */}
            <div className='Mobile-Navbar-Button'>
<CgMenu name="menu-outline" className="mobile-nav-icon"/>
<CgClose name="close-outline" className="mobile-nav-icon close-outline"/>
            </div>
            
            {/* <Dropdown alignRight>
    <Dropdown.Toggle variant="success">
   
    <FaShoppingCart color='white' fontSize="25px"></FaShoppingCart>
    <Badge>{  {state.cart.length}}</Badge>
    </Dropdown.Toggle>
    <Dropdown.Menu style={{minWidth:370}}>
    <span style={{padding:10}}>Cart is Empty</span>
    </Dropdown.Menu>

  </Dropdown>
 */}


          </Nav>
          <Cart/> 
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
   </>
  )
}

export default NavigationBar
