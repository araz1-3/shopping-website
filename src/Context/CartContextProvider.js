import React, {createContext, useReducer} from 'react';

const initialState ={
    selectItems : [],
    itemsCenter : 0,
    total:0,
    checkout:false
}


const sumItem = items =>{
    const  itemsCenter = items.reduce((total,product)=> total + product.quantity,0)
    let total = items.reduce((total,product)=> total + product.price * product.quantity,0).toFixed(2)
    return { itemsCenter,total}
}

const cartReducer =(state,action)=>{
    console.log(state)

    switch(action.type){
        case "ADD_ITEM":
            if (!state.selectItems.find(item=> item.id === action.payload.id)){
                state.selectItems.push({
                   ...action.payload,
                    quantity:1
                })
            }
            return{
                ...state,
                selectItems: [...state.selectItems],
                ...sumItem(state.selectItems),
                checkout: false
            }
        case "REMOVE_ITEM":
            const newSelectItems =state.selectItems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                selectItems: [...newSelectItems],
                ...sumItem(newSelectItems)
            }
        case "INCREASE":
            const IndexI = state.selectItems.findIndex(item => item.id === action.payload.id)
            state.selectItems[IndexI].quantity++
            return {
                ...state,
                ...sumItem(state.selectItems)
            }
        case "DECREASE":
            const IndexD = state.selectItems.findIndex(item => item.id === action.payload.id)
            state.selectItems[IndexD].quantity--
            return {
                ...state,
                ...sumItem(state.selectItems)
            }
        case "CHECKOUT":
            return {
                selectItems : [],
                itemsCenter : 0,
                total:0,
                checkout:true
            }
        case "CLEAR":
            return {
                selectItems : [],
                itemsCenter : 0,
                total:0,
                checkout:false
            }
        default:
            return state
    }
}


export const CartContext= createContext()

const CartContextProvider = ({children}) => {


    const [state,dispatch]=useReducer(cartReducer,initialState)

    return (
        <div>
            <CartContext.Provider value={{state,dispatch}}>
                {children}
            </CartContext.Provider>
        </div>
    );
};

export default CartContextProvider;