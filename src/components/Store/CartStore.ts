import {create} from "zustand";

export interface CartProduct {
  id: number;
  name: string;
  price: { [key: string]: string };
}

interface CartState{
    cartItems: CartProduct[];
    addToCart: (product: CartProduct) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartState>(set => ({
    cartItems: [],
    addToCart: (product) => set(state => ({
        cartItems: [...state.cartItems, product],
    })),
    removeFromCart: id => set(state => ({
        cartItems: state.cartItems.filter(item => item.id !== id),
    })),
    clearCart: () => set({cartItems: []}),
}))
