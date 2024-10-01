import  React, {useState} from 'react'
import { useCartStore } from '../Store/CartStore'
import { CartProduct } from '../Store/CartStore';

const Cart = () => {
    const { cartItems, addToCart, removeFromCart, clearCart } = useCartStore();
    const [isCheckingOut, setCheckingOut] = useState(false);
    // if(isCheckingOut){
    //     return <CheckOutForm/>
    // }
  return (
    <div>
        <h2>Cart</h2>
        {cartItems.length===0 ? (
            <p>Your cart is empty</p>
        ): (
            <ul>
                {cartItems.map((item: CartProduct) =>(
                    <li>
                        {item.name} - {}
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default Cart