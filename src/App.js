import {Route,Switch,Redirect} from 'react-router-dom'

import Store from "./component/Store";
import ProductDetails from "./component/ProductDetails";

//context
import ProductsContextProvider from "./Context/ProductsContextProvider";
import CartContextProvider from "./Context/CartContextProvider";
import FavoriteContextProvider from "./Context/FavoriteContextProvider";

//Components
import Navbar from "./component/shared/Navbar";
import ShopCart from "./component/shopCart";
import Home from "./component/Home/Home"
import Footer from "./component/footer";
import About from "./component/about/about";
import Contact from "./component/contact/contact";
import Favorites from "./component/favorites";


function App() {
  return (
    <ProductsContextProvider>
        <CartContextProvider>
            <FavoriteContextProvider>
            <Navbar/>
            <Switch>
                <Route path="/products/:id" component={ProductDetails}/>
                <Route path="/products" component={Store}/>
                <Route path="/cart" component={ShopCart}/>
                <Route path="/favorites" component={Favorites}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/" component={Home}/>
                <Redirect to="/products"/>
            </Switch>
            <Footer/>
            </FavoriteContextProvider>
        </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
