import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;

    cart.forEach((cartItem) => {
      const quantity = cartItem.quantity
      const cost = parseFloat(cartItem.cost.substring(1))
      total += quantity * cost
    })
    return total;
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1){
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  
  const calculateTotalCost = (item) => {
    const itemCost = parseFloat(item.cost.substring(1))
    const quantity = item.quantity

    return itemCost * quantity
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>

      <div className="flex justify-center flex-col gap-y-5 mb-5">

        <button
         className="py-3.5 bg-[#4caf50] text-white px-9 text-lg rounded-md hover:opacity-85 transition-all duration-400 cursor-pointer" 
         onClick={(e) => onContinueShopping(e)}>
          Continue Shopping
        </button>
  
        <button className="py-3 bg-[#4caf50] text-white px-9 text-lg rounded-md hover:opacity-85 transition-all duration-400 cursor-pointer">Checkout</button>

      </div>
    </div>
  );
};

export default CartItem;


