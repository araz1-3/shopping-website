import React,{useReducer,createContext} from 'react';

let localStorageFavorites = [];
if (localStorage.getItem("favorites")) {
    localStorageFavorites = JSON.parse(localStorage.getItem("favorites"));
}

const initialState ={
    favoriteItems:localStorageFavorites,
    favoriteCounter:localStorageFavorites.length,
}

const sumFav = items => {
    const  favoriteCounter = items.reduce((total, product) => total + product.quantity, 0)
    return {favoriteCounter}
}

const FavoriteReducer =(state , action)=>{
    console.log(state)
    switch (action.type){
        case "ADD_FAVORITE":
            if (!state.favoriteItems.find(item=> item.id === action.payload.id)){
                state.favoriteItems.push({
                    ...action.payload,
                    quantity:1,
                })
            }
            localStorage.setItem("favorites",JSON.stringify(state.favoriteItems))
            return{
                ...state,
                favoriteItems: [...state.favoriteItems],
                ...sumFav(state.favoriteItems),

            }
        case "REMOVE_FAVORITE":
            const newFavoriteItems =state.favoriteItems.filter(item => item.id !== action.payload.id)
            localStorage.setItem("favorites",JSON.stringify(newFavoriteItems))
            return {
                ...state,
                favoriteItems: [...newFavoriteItems],
                ...sumFav(newFavoriteItems),
            }
        default:
            return state
    }
}

export const FavoriteContext = createContext()

const FavoriteContextProvider = ({children}) => {

    const [FavState , FavDispatch] = useReducer(FavoriteReducer , initialState)

    return (
        <FavoriteContext.Provider value={{FavState,FavDispatch}}>
            {children}
        </FavoriteContext.Provider>
    );
};

export default FavoriteContextProvider;




