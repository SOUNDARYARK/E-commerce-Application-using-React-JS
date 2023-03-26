import React from 'react';
import ReactDOM from 'react-dom/client';
//import '../node_modules/font-awesome/css/font-awesome.min.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import ProductsMain from './ProductsMain';
import Product from './ProductDetail';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import Cart from './Cart';
import Login from './Login';
import Register from './Register';
import Checkout from './Checkout';
import PageNotFound from './PageNotFound';
import Footer from './Footer';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
 
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductList" element={<ProductsMain/>} /> 
        <Route path="/Product/:id" element={<Product/>} />
        <Route path="/ContactPage" element={<ContactPage/>} />
        <Route path="/AboutPage" element={<AboutPage/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="*" element={<PageNotFound />} /> 
        <Route path="/product/*" element={<PageNotFound />} />
        </Routes>
        </Provider>
    </BrowserRouter> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



