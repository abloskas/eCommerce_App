import React from 'react';
import {Card} from 'react-bootstrap';

const ratingStars = (rating) => {
    rating = !!rating && rating >= 0 ? rating : 0;
    let wholeNumRating = 0;
    let halfNumRating = 0;
    let wholeNumCount = 0;
    let halfNumCount = 0;
    let totalCount = 0;
    let innerHTMLText = '';

    halfNumRating = rating - Math.floor(rating);
    wholeNumRating = rating - halfNumRating;


    while (!!rating && wholeNumRating > wholeNumCount){
        const text = '<i style="color:gold; height: 25px; width: 25px" class="fa fa-solid fa-star"></i>';
        innerHTMLText += text;
        wholeNumCount++;
    }
    if(!!halfNumRating && halfNumRating >= 0){
        const halfStarText = '<i style="color:gold; height: 25px; width: 25px" class="fas fa-star-half-alt"></i>';
        innerHTMLText += halfStarText;
        halfNumCount++
    }
    totalCount = wholeNumCount + halfNumCount;
    if(totalCount < 5){
        while(totalCount < 5 ){
            const text = '<i style="color:gold; height: 25px; width: 25px" class="far fa-star"></i>';
            innerHTMLText += text;
            totalCount++;
            
        }
    }

   return innerHTMLText;
};


const Product = ({product}) => {

  return (
   <Card className='my-3 p-3 rounded'>
    <a href={`product/${(!!product && product._id ? product._id : '')}`}>
    <Card.Img src={(!!product && product.image ? product.image : '')} variant='top'></Card.Img>
    </a>
    <Card.Body>
    <a href={`product/${(!!product && product._id ? product._id : '')}`}>
        <Card.Title as="div">
            <strong>{(!!product && product.name ? product.name : '')}</strong>
        </Card.Title>
    </a>
    <Card.Text as='div'>
       <div className="my-3">
        <Rating as="div" rating={product.rating}/>
        {product.numReviews} reviews
       </div>
    </Card.Text>
    <Card.Text as='h3'>
       ${(!!product && !!product.price ? product.price : '')}
    </Card.Text>
    </Card.Body>
   </Card>
  )
}


function Rating({rating}) {
    const text =  ratingStars(rating);
  return (
    <span className='fa' dangerouslySetInnerHTML={{ __html:  text }}></span>
  )
}


export default Product;