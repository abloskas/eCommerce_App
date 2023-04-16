import React from 'react';
import {Card} from 'react-bootstrap';

const ratingStars = (rating) => {
    rating = !!rating && rating >= 0 ? rating : 0;
    let wholeNumCount = 0;
    let halfCount = 0;
    let count = 1;
    let innerHTMLText = '';

    halfCount = rating - Math.floor(rating);
    wholeNumCount = rating - halfCount;


    while (!!rating && wholeNumCount >= count){
        const text = '<i style="color:gold; height: 25px; width: 25px" class="fa fa-solid fa-star"></i>';
        innerHTMLText += text;
        count++;
    }
    if(!!halfCount && halfCount >= 0){
        const halfStarText = '<i style="color:gold; height: 25px; width: 25px" class="fa fa-solid fa-star-half"></i>';
        innerHTMLText += halfStarText
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
        {/* {(!!product && !!product.rating ? product.rating : '')} from {( !!product && !!product.numReviews ? product.numReviews : '')} reviews */}
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
    // console.log(text);
  return (
    <span className='fa' dangerouslySetInnerHTML={{ __html:  text }}></span>
  )
}


export default Product