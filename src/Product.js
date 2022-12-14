import React, { useEffect } from 'react';
import './Product.css';
import { useStateValue } from "./StateProvider";

function Product(props) {
  
  const [ {basket} , dispatch] = useStateValue();

  console.log("Here is the basket" , basket)

  const addToBasket = () => {
    dispatch({
       type : 'ADD TO BASKET' , 
       item : {
         id: props.id , 
         title : props.title , 
         image : props.image , 
         price : props.price , 
         rating : props.rating ,
       }
    })
  }
  const ratingComp = [];
  return (
    <div className='product'>
        <div className='product__info'>
                <p>{props.title}</p>
                <p className='product__price'>
                    <small>₹</small>
                    <strong>{props.price}</strong>
                </p>
                <div className='product__rating'>
                    {
                       [...Array(props.rating)].map((item)=>
                          <p>⭐</p> )
                    }
                </div>
        </div>  
        <img src={props.image}/>
        <button onClick={addToBasket}>
            Add to Cart
        </button>
    </div>
  )
}

export default Product;