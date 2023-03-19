import  React from 'react'
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';

const ProductsMain = () =>
{
    return (
       <>
            <Header/>
            <ProductList/> 
           <Footer/>   
       </>
    )
}

export default ProductsMain;