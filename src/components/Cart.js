import React, {useState} from 'react';
import CartItemBox from './CartItemBox';
import CartItemsList from './CartItemsList';

function Cart() {

  function displayCart(items) {
    return <CartItemBox key = {items.id} name={items.name} price={items.price} />
  }

  return (
    <div id="cart">
      {CartItemsList.map(displayCart)}
    </div>
  );
}

export default Cart;