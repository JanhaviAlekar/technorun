import React from "react";
import SponsorsCard from "./sponsorsCard";
const AllSponsers =() =>{
    return( <div className='col-md-9 text-center'>
    <div className=' row row-cols-1 row-cols-md-3 g-4 '>
            <div className="grid-container">
            <div className="grid-item">
            <div className="container-card">
           <SponsorsCard/>
            </div>
            </div>
            </div>
            </div>
            </div>);
}
export default AllSponsers;