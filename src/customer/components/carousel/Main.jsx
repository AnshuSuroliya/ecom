import React from "react";
import { Maincarouseldata } from './Maincarouseldata';
import AliceCaraousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Carousel } from 'flowbite-react';

const Main=()=>{
//const items= Maincarouseldata.map((item)=><img className='cursor-pointer h-80 w-full aspect-ratio-1' role='presentation' src={item.image} alt=""/>)

return (
<div>
   



    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img className="object-scale-down" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/MFD/Dec/15/Deals-Unrec-PC-3000._CB571022753_.jpg" alt="..." />
        <img src="https://www.jurnal.id/wp-content/uploads/2018/12/28.-Produk.jpg" alt="..." />
        <img src="" alt="..." />
        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
      </Carousel>
    </div>
  

    
   {/* <AliceCaraousel 
    autoPlay
    autoPlayInterval={3000}
    disableButtonsControls
    disableDotsControls
    renderNextButton
    renderPrevButton
    infinite
    items={items} */}

</div>
 );  
}
export default Main;