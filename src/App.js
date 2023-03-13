
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from 'react';
import { Rating } from 'react-simple-star-rating';
import { useState } from "react";

function App() {

  
 const [count, setCount] = useState(0)
  return (

    
    <div className='App'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container px-4 px-lg-5'>
          <a className='navbar-brand' href='#!'>Start Bootstrap</a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'></button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 md-lg-0 ms-lg-4'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#!'>Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#!'>About</a>
            </li>
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle' id='navbarDropdown' href='#!' role='button' data-toggle='dropdown' aria-expanded='false'>Shop</a>
              
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <a className='dropdown-item' href='#!'>All Products</a> 
                </li>
                <li>
                  <hr className='dropdown-divider'></hr>
                </li>
                <li>
                  <a className='dropdown-item' href='#!'>Product Items</a> 
                </li>
                <li>
                  <a className='dropdown-item' href='#!'>New Arrivals</a> 
                </li>
              </ul>
              </li>
          </ul>
          <form className='d-flex'>
            <button className='btn btn-outline-dark' type='submit'>
              <i className='bi-cart-fill me-1'></i>
              Cart
              <span className='badge bg-dark text-white ms-1 rounded-pill'>{count}</span>

            </button>
          </form>
        </div>
        </div>
      </nav>
      <header className="header">
        <div >
          <h1 className='title'>Shop in style</h1>
          <p className='sub-title'>With this shop homepage template</p>
        </div>
      </header>
      <div className="card-container">

   <Details
   heading='Fancy Product'
   price='$40.00 - $80.00'
   button='View options'/>

   <Details
   tag={<div className='tag'>Sale</div>}
   heading='Special Item'
   rating={<Rating/>}
   price=' $20.00' 
   price1='$18.00'
   setCount={setCount}
   count={count}
   button='Add to cart'
   button1='Remove From Cart'/>

   <Details
   tag={<div className='tag'>Sale</div>}
   img='450 x 300'
   heading='Sale Item'
   price=' $50.00'
   price1='$25.00'
   setCount={setCount}
   count={count}
   button='Add to cart'
   button1='Remove From Cart'/>

   <Details
   heading='Popular Item'
   rating={<Rating value='readonly' />}
   price='$40.00'
   setCount={setCount}
   count={count}
   button='Add to cart'
   button1='Remove From Cart'/>

   <Details
   tag={<div className='tag'>Sale</div>}
   heading='Sale Item'
   price=' $50.00' 
   price1='$25.00'
   setCount={setCount}
   count={count}
   button='Add to cart'
   button1='Remove From Cart'/>

   <Details
   heading='Fancy Product'
   price='$120.00 - $280.00'
   button='View options'/>

   <Details
   tag={<div className='tag'>Sale</div>}
   heading='Special Item'
   rating={<Rating/>}
   price=' $20.00' 
   price1='$18.00'
   setCount={setCount}
   count={count}
   button='Add to cart'
   button1='Remove From Cart'/>

   <Details
   heading='Popular Item'
   rating={<Rating/>}
   price=' $40.00'
   setCount={setCount}
   count={count}
   button='Add to cart'
   button1='Remove From Cart'/>
    </div>
    <footer className='footer'>
      <div>
        <p className='sub-title'>Copyright © Your Website 2023</p>
      </div>
    </footer>
    </div>
    
    
    
  );
}

export default App;

function Details(props, setCount, count)  {
const [show, setShow] = useState(false);

function addToCart() {
  setShow(!show)
  props.setCount(props.count + 1)
}

function removeFromCart() {
  setShow(!show)
  props.setCount(props.count - 1)
}

  
  
  return (
    
    <Card style={{ width: '18rem' }}>
      <div>{props.tag}</div>
    <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
    <Card.Body>
      <Card.Title>{props.heading}</Card.Title>
      <div className='star'>{props.rating}</div>
     
      
      <Card.Text><span className='text-muted text-decoration-line-through'>{props.price1}</span>
         {props.price}
      </Card.Text>
      
    </Card.Body>
    <div className='footer1' >
    {!show ? <Button
    className='btn btn-outline-dark'
           variant="light"
           onClick={addToCart}
           >{props.button}</Button> : ""}


           {show ? <Button 
           variant="danger"
           onClick={removeFromCart}
           >{props.button1}</Button> : ""}
      


      </div>

      
    
  </Card>
  
  )

}







