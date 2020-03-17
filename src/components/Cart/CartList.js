import React from 'react'
import CartItem from './CartItem';

export default function CartList({value}) {
    const cart = value;
    console.log(value, cart);
    
    return (
        <div>
            <h3>Hello from CartList</h3>
            <CartItem />
        </div>
    )
}
