import React from "react";
import Main from "../../components/carousel/Main";

import Navbar from '../../components/navigation/navigation';
import Product from "../../components/product/Product";

const Homepage=()=>{
    return (
        <div className="overflow-x-hidden">
       <Navbar/>
       
       <Product/>
       </div>
    )
};
export default Homepage;