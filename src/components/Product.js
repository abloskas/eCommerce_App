import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Rating from '../components/Rating';


const Product = ({product}) => {

  return (
   <Card className='my-3 p-3 rounded'>
    <Link to={`product/${(!!product && product._id ? product._id : '')}`}>
    <Card.Img src={(!!product && product.image ? product.image : '')} variant='top'></Card.Img>
    </Link>
    <Card.Body>
    <Link to={`product/${(!!product && product._id ? product._id : '')}`}>
        <Card.Title as="div">
            <strong>{(!!product && product.name ? product.name : '')}</strong>
        </Card.Title>
    </Link>
    <Card.Text as='div'>
       <div className="my-3">
        <Rating rating={product.rating} value={product.numReviews + ' ' + 'reviews'} />
       </div>
    </Card.Text>
    <Card.Text as='h3'>
       ${(!!product && !!product.price ? product.price : '')}
    </Card.Text>
    </Card.Body>
   </Card>
  )
}


export default Product;