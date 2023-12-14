import React from "react";
import { Maincarouseldata } from './Maincarouseldata';
import AliceCaraousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Main=()=>{
const items= Maincarouseldata.map((item)=><img className='cursor-pointer h-60 w-60' role='presentation' src={item.image} alt=""/>)
return (
    <AliceCaraousel 
    autoPlay
    autoPlayInterval={3000}
    infinite
    items={items}
    mouseTracking/>
);
}
export default Main;