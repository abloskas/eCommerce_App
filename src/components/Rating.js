
const Rating = ({rating, value}) => {
    const text =  ratingStars(rating);
  return (
    <div>
    <span className='fa' dangerouslySetInnerHTML={{ __html:  text }}></span>
    <span>{value}</span>
    </div>
  )
};


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

export default Rating;