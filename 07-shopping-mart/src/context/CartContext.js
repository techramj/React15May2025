import { createContext, useContext, useReducer } from "react"
import { CartReducer } from "../reducer/cartReducer";

const initialState = {
    cartList:[],
    total:0
}

const CartContext = createContext(initialState);

export const CartProvider = ({children})=>{
    //const[state, setState] = useState(initialState);
    const[state, dispatch]  = useReducer(CartReducer, initialState);

    const addToCart =  (product)=>{
       const updatedCartList = state.cartList.concat(product);
       console.log("updatedCartList", updatedCartList);
       dispatch({
        type:"ADD_TO_CART",
        payload: {products: updatedCartList}
       });
    }

    const removeToCart =  (product)=>{
        const updatedCartList = state.cartList.filter((item)=> item.id !== product.id);
        dispatch({
         type:"REMOVE_TO_CART",
         payload: {products: updatedCartList}
        });
     }

     const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeToCart
     }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = ()=>{
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context; 
}