import React, { useEffect } from 'react';
import ProductComponent from './ProductComponent';
import { useDispatch, useSelector } from 'react-redux'
//import axios from 'axios'
import { fetchProducts, setProducts } from '../redux/actions/ProductActions'
//import apiCall from '../apis/apiCall'
//const URL ='https://fakestoreapi.com/products'
function ProductList(props) {
    const products = useSelector(state => state)
    const dispatch = useDispatch(setProducts)

    // const fetchProducts = async () => {
    //     //const response = await axios.get(URL)
    //     const response = await apiCall.get('/products')
    //     //console.log(response);
    //     dispatch(setProducts(response.data))
    // }


    //console.log(products);
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    console.log(products);
    return (
        <div className='ui grid container'>
            <ProductComponent />
        </div>
    );
}

export default ProductList;