import {Route ,Routes,Navigate} from 'react-router-dom'

import Store from "./component/Store";
import ProductDetails from "./component/ProductDetails";

//context
import ProductsContextProvider from "./Context/ProductsContextProvider";
import CartContextProvider from "./Context/CartContextProvider";
import FavoriteContextProvider from "./Context/FavoriteContextProvider";
import FilterContextProvider from "./Context/FilterContextProvider";

//Components
import Navbar from "./component/shared/Navbar";
import ShopCart from "./component/shopCart";
import Home from "./component/Home/Home"
import Footer from "./component/footer";
import About from "./component/about/about";
import Contact from "./component/contact/contact";
import Favorites from "./component/favorites";
import NotFound from "./component/notFound";


function App() {
  return (
    <ProductsContextProvider>
        <CartContextProvider>
            <FavoriteContextProvider>
                <FilterContextProvider>
                    <Navbar/>
                    <Routes>
                        <Route path="/products/:id" element={<ProductDetails/>}/>
                        <Route path="/products" element={<Store/>}/>
                        <Route path="/cart" element={<ShopCart/>}/>
                        <Route path="/favorites" element={<Favorites/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/notfound" element={<NotFound/>}/>
                        <Route path="/*" element={<Navigate to="/notfound"/>}/>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                    <Footer/>
                </FilterContextProvider>
            </FavoriteContextProvider>
        </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
