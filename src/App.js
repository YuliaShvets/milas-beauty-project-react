import React from "react";
import Header from "./layouts/header/header.js";
import HomePage from "./pages/home/homePage";
import Footer from "./layouts/footer/footer";
import Catalog from "./pages/catalog/catalog"
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Cart from "./pages/cart/cart";
import DetailProductPage from "./pages/detail-product-page/detailProductPage";


function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/catalog/:id" element={<DetailProductPage/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
