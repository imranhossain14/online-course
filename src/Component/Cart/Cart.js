import React from 'react';

const Cart = (props) => {
        const cart = props.cart;
        console.log(cart);
        const total = cart.reduce((total, prod) => total + parseFloat(prod.price),0)
        const formatNumber = num => {
            const precision = num.toFixed(2);
            return Number(precision);
        }
        
    return (
      
        <div>
            <h4>Course Order Summary</h4>
            <p>Enroll Courses : {cart.length}</p>
            <p>Total price : ${formatNumber(total)}</p>
        </div>
    );
};


export default Cart;