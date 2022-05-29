import React,{createContext,useReducer} from 'react';


const initialState ={
    filteredProducts: [],
    allProducts: [],
    sort: "default",
    filter: {
        text: "",
        category: "all",
        price: 1000,
        minPrice: 0,
        maxPrice: 0,
    }
}

const filterReducer=(state , action)=>{
    switch (action.type){
        case "LOAD_PRODUCTS":
            let maxPrice = action.payload.map((item) => item.price);
            maxPrice = Math.max(...maxPrice);

            return {
                ...state,
                filteredProducts: [...action.payload],
                allProducts: [...action.payload],
                filter: { ...state.filter, maxPrice},
            };

        case "UPDATE_SORT":
            return { ...state, sort: action.payload };

        case "SORT_PRODUCTS":
            const { filteredProducts, sort } = state;
            let tempProducts = [...filteredProducts];
            if (sort === "price-lowest") {
                tempProducts = tempProducts.sort((a, b) => a.price - b.price);
            }
            if (sort === "price-highest") {
                tempProducts = tempProducts.sort((a, b) => b.price - a.price);
            }
            if (sort === "name-a") {
                tempProducts = tempProducts.sort((a, b) =>
                    a.title.localeCompare(b.title)
                );
            }
            if (sort === "name-z") {
                tempProducts = tempProducts.sort((a, b) =>
                    b.title.localeCompare(a.title)
                );
            }
            return { ...state, filteredProducts: tempProducts };

        case "FILTER_PRODUCTS":
            const {
                allProducts,
                filter: { text, category, price },
            } = state;
            let tempFilteredProducts = [...allProducts];
            if (text) {
                tempFilteredProducts = tempFilteredProducts.filter((product) =>
                    product.title.toLowerCase().startsWith(text.toLowerCase())
                );
            }
            if (category !== "all") {
                tempFilteredProducts = tempFilteredProducts.filter(
                    (product) => product.category === category
                );
            }

            if (price >= 0) {
                tempFilteredProducts = tempFilteredProducts.filter(
                    (product) => product.price <= price
                );
            }

            return { ...state, filteredProducts: tempFilteredProducts };

        case "CLEAR_FILTERS":
            return {
                ...state,
                sort: "default",
                filter: {
                    text: "",
                    category: "all",
                    minPrice: 0,
                    maxPrice: state.filter.maxPrice,
                    price: 1000,
                },
            };

        case "UPDATE_FILTERS":
            const { name, value } = action.payload;
            return { ...state, filter: { ...state.filter, [name]: value } };
        default:
            throw new Error(`No Matching "${action.type}" - action type`);
    }
}

export const FilterContext = createContext();


const FilterContextProvider = ({children}) => {

    const [state , dispatch] = useReducer(filterReducer,initialState )


    return (
        <FilterContext.Provider value={{state,dispatch}}>
            {children}
        </FilterContext.Provider>
    );
};

export default FilterContextProvider;
