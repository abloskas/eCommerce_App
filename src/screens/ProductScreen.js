import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import products from '../products';
import Rating from '../components/Rating';

const ProductScreen = () => {
    let {id} = useParams();
    const product = products.find(x => !!x && x._id === id);
    const ratingData = {rating: product.rating, val: product.numReviews + 'reviews'};
  return (
    <>
    <Link className="btn btn-light my-3" to="/">Go Back</Link>
    <Row>
        <Col md={6}>
        <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3 >
                </ListGroup.Item>
                <ListGroup.Item>
                <Rating rating={product.rating} value={product.numReviews + ' ' + 'reviews'}>
                  </Rating>
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: ${product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                    Description: {product.description}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row>
                            <Col>Price:</Col>
                            <Col>
                            <strong>${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Status:</Col>
                            <Col>
                           {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button className="btn btn-block" type='button' disabled={product.countInStock <= 0}>Add To Cart</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
    </>
  )
}

export default ProductScreen;