import React, { createContext, useState } from 'react'

export const cartContext = createContext()
export function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const value = {
        cart,
        setCart
    };
    return (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    )
}