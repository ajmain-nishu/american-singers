import React from 'react';
import IndividualSinger from '../IndividualSinger/IndividualSinger';



//cart function
const Cart = (props) => {
    // destructuring object
    const {cart} = props;

    //summation total cost
    let totalPrice = cart.reduce((previous, product) => previous + product.salary, 0);
    return (
        <div className="mt-3">

            <h3>Singer Added: {cart.length}</h3>
            <h3>Total Cost: $ {totalPrice}</h3>

            {/* Individual component call and pass data */}
            {
                cart.map(individualSinger => <IndividualSinger key={individualSinger.id} individualSinger={individualSinger}></IndividualSinger>)
            }
            
            {/* cart button */}
            <button className="btn carditem__btn--color my-4">Buy Now</button>

        </div>
    );
};



export default Cart;