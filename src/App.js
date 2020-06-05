import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {Home} from "./Components/Pages/Home";
import {Cart} from "./Components/Pages/Cart";
import 'antd/dist/antd.css';
import {connect} from "react-redux";
import {addCart, decCount, deleteProduct, incCount} from "./Store/Actions";
import {getCartProducts, getTotal} from "./Store/Reducers";

const App = ({products, cart, total, addCart, incCount, decCount, deleteProduct}) => {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home products={products} addCart={addCart}/>
                </Route>
                <Route path="/cart">
                    <Cart cart={cart} incCount={incCount} decCount={decCount} deleteProduct={deleteProduct} total={total}/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
    products: state.products.data,
    cart: getCartProducts(state),
    total: getTotal(state)
})

export default connect(
    mapStateToProps,
    { addCart, incCount, decCount, deleteProduct }
)(App)
