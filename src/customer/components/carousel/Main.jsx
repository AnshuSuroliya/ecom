import React from "react";
import { Maincarouseldata } from './Maincarouseldata';
import AliceCaraousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Main=()=>{
const items= Maincarouseldata.map((item)=><img className='cursor-pointer h-80 w-full mt-2' role='presentation' src={item.image} alt=""/>)
return (
    <div>
    <AliceCaraousel 
    autoPlay
    autoPlayInterval={3000}
    infinite
    items={items}
    mouseTracking/>
    </div>
);
}
export default Main;