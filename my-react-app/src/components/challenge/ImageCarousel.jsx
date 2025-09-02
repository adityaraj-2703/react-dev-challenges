import { useEffect } from 'react';
import CarouselButton from './CarouselButton.jsx'

const ImageCarousel = () => {

    useEffect(()=>{
        
    })
    return (
    <div className="imageCarousel">
        <CarouselButton>Prev</CarouselButton>
        <img src="https://fastly.picsum.photos/id/237/200/300.jpg" alt=""/>
        <CarouselButton>Next</CarouselButton>
    </div>
    )
};

export default ImageCarousel;