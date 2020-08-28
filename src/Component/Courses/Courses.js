import React, { useState } from 'react';
import coursesList from '../../Data/data.json';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import "./Courses.css";

const Courses = () => {

    const [cart, setCart] =useState([]);
    const handleAddProduct =(product) => {  
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        <div className = "shop-container">
           <div className = "course-container">
            {   
                coursesList.map(course => <Product handleAddProduct ={handleAddProduct} product ={course} key ={course.id}></Product>)
               
            }
            </div> 

            <div className="cart-container">
                    <Cart cart ={cart}></Cart>
            </div>
           
        </div>
    );
};

export default Courses;