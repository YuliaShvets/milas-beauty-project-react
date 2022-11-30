import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../../store/itemSlice";
import "./cart.css"

function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    let itemObjectList = cart.items;
    let totalPrice = 0;
    const handleIncreaseAmount = (item) => {
        dispatch(addToCart(item))
    }
    const handleDecreaseAmount = (item) => {
        dispatch(removeFromCart(item))
    }
    if (cart.items.length === 0) {
        return (<div className="cartSec">
            <p>Cart is empty</p>
        </div>)
    } else {
        for (let i of cart.items) {
            totalPrice += i.amount * i.price;
        }
        let itemsList = itemObjectList.map((item) => {
            return (<div className='block' key={itemObjectList.indexOf(item)}>
                <img src={item.image} alt=""/>
                <button onClick={() => {
                    handleIncreaseAmount(item)
                }}>+
                </button>
                <div className='amount'>{item.amount}</div>
                <button onClick={() => {
                    handleDecreaseAmount(item)
                }}>-
                </button>
                <div className='price'>{item.price}$</div>
            </div>)
        })
        return (
            <div className="cartSec">
                <div>{itemsList}</div>
                <div className='total-price'>Total price: {totalPrice}$</div>
            </div>
        )
    }
}

export default Cart;