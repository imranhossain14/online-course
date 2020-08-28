import React from "react";
import "./Product.css";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
console.log(props);

  const {title, price} = props.product;
  return (
    <div className="product">
     
      <div className="product-name">
        <h4>{title}</h4>
        <br />
      
        <p>${price}</p>
        <br />

        <Button variant="success"
            onClick = {()=>props.handleAddProduct(props.product)} 
        >
            <FontAwesomeIcon icon={faShoppingCart} /> Enroll Now
        </Button>
        
  
      </div>
    </div>
  );
};

export default Product;

