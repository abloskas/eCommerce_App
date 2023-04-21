import React, { useEffect } from 'react';
import {Row, Col} from 'react-bootstrap';
import Product from '../components/Product';
import {useDispatch, useSelector} from 'react-redux';
import {allProducts} from '../actions/productActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const HomeScreen = () => {

  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.products);
  const { loaded, loading, error, products } = getProducts;

  useEffect(() => {
    if(!(products && products.length) && !loaded){
   dispatch(allProducts())
    }
  }, [dispatch]);

  return (
    <>
    <h1>Latest Products</h1>
    {!!loading ? <Loader /> : !!error ? <Message variant='danger'>{error}</Message> : 
    <Row>
        {(!!(products && products.length) ? products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} key={product._id} />
              </Col>
        )) : null)}
    </Row>}
    
    </>
  )
}

export default HomeScreen;